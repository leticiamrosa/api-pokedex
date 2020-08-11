import Api from '@utils/api/Api'

interface Dependencies {
  api: Api;
};

export default class PokemonsRepository {
  private api: Api;
  private baseUrl: string;

  public constructor ({ api }: Dependencies) {
    this.api = api
    this.baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  }

  public async getPokemons () {
    const url = `${this.baseUrl}`

    const httpParams = {
      url,
      timeout: 3000
    }

    const apiResponse = await this.api.get(httpParams)
    console.log('apiResponse', apiResponse)

    return apiResponse
  }
}
