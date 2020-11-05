import projectCatcher from './projectCatcher'

describe('Project Catcher', () => {
  it('should return the data object when the return of the status is 200', async () => {
    // given
    const expectedResponse = {
      data: {
        1: 1404,
        15: 1410,
        30: 1418,
        90: 1443
      }
    }
    const responseMock: any = [
      {
        status: 200,
        data: expectedResponse
      }
    ]

    // when
    const response = await projectCatcher(responseMock)

    // then
    expect(response).toEqual([expectedResponse])
  })

  it('should return the error object when the return of the status is 400', async () => {
    // given
    const expectedResponse = {
      message: 'mock_message'
    }
    const responseMock: any = [
      {
        status: 400,
        data: expectedResponse
      }
    ]

    // when
    const response = await projectCatcher(responseMock)

    // then
    expect(response).toEqual([null, expectedResponse])
  })
})
