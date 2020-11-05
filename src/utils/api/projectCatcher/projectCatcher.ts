import { get } from '@helpers/functionHelpers'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ([response, error]): any => {
  const responseStatus = get(response, 'status')
  const responseData = get(response, 'data')

  if (responseStatus === 200 && responseData) {
    return [responseData]
  }

  const responseError = get(response, 'data', null)
  const catchedError = responseError || error

  return [null, catchedError]
}
