import axios, {
  AxiosStatic,
  AxiosInstance,
  AxiosBasicCredentials,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import { stringify } from 'query-string'

import catcher from '@utils/api/catcher/catcher'

interface ApiParams {
  url: string;
  headers?: object;
  auth?: AxiosBasicCredentials;
  query?: object;
  body?: object;
  responseType?: string;
  responseEncoding?: string;
  timeout?: number;
}

interface ApiData {
  timeout?: number;
}

interface ApiErrorResponse {
  code: string;
  message: string;
}

export interface ApiError {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse;
  message?: string;
  numericErrorCode?: number;
  error?: ApiErrorResponse;
}

export interface ApiResponse<T = any> {
  data: T;
}

interface ApiDependencies {
  axios: AxiosStatic;
  stringify: (value: { [key: string]: any }) => string;
  catcher: typeof catcher;
}

export default class Api {
  private axios: AxiosInstance;

  private stringify: (value: object) => string;

  private catcher: typeof catcher;

  public constructor (
    data: ApiData = {},
    dependencies: ApiDependencies = {
      axios,
      catcher,
      stringify
    }
  ) {
    this.axios = data.timeout
      ? dependencies.axios.create({ timeout: data.timeout })
      : dependencies.axios.create()
    this.catcher = dependencies.catcher
    this.stringify = dependencies.stringify
  }

  private parseUrl = (url: string, params): string => {
    const parsedParams = this.stringify(params)
    return `${url}?${parsedParams}`
  };

  private createHeaders = (header?): Record<string, unknown> => {
    const defaultHeader = {
      'content-type': 'application/json'
    }

    return Object.assign(defaultHeader, header)
  };

  public post (params: ApiParams): Promise<any> {
    const { url, headers: customHeaders, body, query } = params

    const headers = this.createHeaders(customHeaders)
    const config = { headers }
    const finalUrl = this.parseUrl(url, query)

    return this.catcher(this.axios.post(finalUrl, body, config))
  }

  public get (params: ApiParams): Promise<any> {
    const {
      url,
      headers,
      auth,
      query,
      body: data,
      timeout = 0
    } = params

    const finalUrl = this.parseUrl(url, query)
    const config = {
      headers,
      auth,
      data,
      timeout
    }

    return this.catcher(this.axios.get(finalUrl, config))
  }
}
