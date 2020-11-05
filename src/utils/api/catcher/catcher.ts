/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (promise: Promise<any>) =>
  promise.then((data: any) => [data]).catch((err: any) => [null, err]);
