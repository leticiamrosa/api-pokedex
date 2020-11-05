/* eslint-disable */
const parseInstance = (
  Dto: new (arg0: any) => {
    (): any;
    new (): any;
    parse: { (): Promise<void>; new (): any };
  },
  data: any
): Promise<void> | object | any => {
  try {
    return new Dto(data).parse();
  } catch (err) {
    console.warn("dtoMapper error", err);
    return null;
  }
};

export default (DtoDataResponse: any) => ([response, error]): [
  object,
  object,
] => {
  if (!response) {
    return [response, error];
  }

  return [parseInstance(DtoDataResponse, response), error];
};
