import axios, {
  AxiosStatic,
  AxiosInstance,
  AxiosResponse,
  AxiosError
} from 'axios'
import { stringify } from 'query-string'

interface ApiDependencies {
  axios: AxiosStatic
  stringify: (value: { [key: string]: any }) => string;
}

interface ApiResponse<T = any> {
  data: T;
}

interface ApiParams {
  url: string;
  headers?: object;
  query?: object;
  body?: object;
  responseType?: string;
}

export default class Api {
  private axios: AxiosInstance;
  private stringify: (value: object) => string;

  public constructor (dependencies: ApiDependencies = {
    axios,
    stringify
  }) {
    this.axios = dependencies.axios.create()
    this.stringify = dependencies.stringify
  }

  private parseUrl = (url: string, params): string => {
    const parsedParams = this.stringify(params)
    return `${url}?${parsedParams}`
  }

  public get (params: ApiParams): Promise<AxiosResponse<any>> {
    const {
      url,
      query
    } = params

    const finalUrl = this.parseUrl(url, query)
    return this.axios.get(finalUrl)
  }
}
