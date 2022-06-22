import { Response } from 'express'

interface IResponseError {
  error: string
  message?: string
}

interface Dependencies {
  routerResponse: Response
}

interface IRouterResponse {
  payloadData?: any
  payloadStatus: number
  payloadError?: IResponseError
}

export default class RouterResponse {
  private routerResponse: Response<any>

  public constructor ({ routerResponse }: Dependencies) {
    this.routerResponse = routerResponse
  }

  public send ({ payloadData, payloadStatus }: IRouterResponse): Response<any> {
    const payload = {
      status: payloadStatus,
      data: payloadData
    }

    return this.routerResponse.status(payloadStatus).json(payload)
  }

  public sendError ({ payloadError, payloadStatus }: IRouterResponse): Response<any> {
    const payload = {
      status: payloadStatus,
      error: payloadError
    }

    return this.routerResponse.status(payloadStatus).json(payload)
  }
}
