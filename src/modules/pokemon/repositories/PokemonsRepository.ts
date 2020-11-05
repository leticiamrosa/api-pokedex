import Api, { ApiError } from '@utils/api/Api'
import { compose } from '@helpers/functionHelpers'
import dtoMapper from '@utils/api/dtoMapper/dtoMapper'
import projectCatcher from '@utils/api/projectCatcher/projectCatcher'
import PokemonsDto from '@modules/pokemon/dtos/PokemonsDto'
import PokemonPayload from '@modules/pokemon/payloads/PokemonPayload'
import PokemonDto from '@modules/pokemon/dtos/PokemonDto'

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

  public async getPokemons (): Promise<[object, ApiError]> {
    const url = `${this.baseUrl}`

    const httpParams = {
      url,
      timeout: 3000
    }

    const apiResponse = await this.api.get(httpParams)
    const pokemonsDtoMapper = dtoMapper(PokemonsDto)

    return compose(
      pokemonsDtoMapper,
      projectCatcher
    )(apiResponse)
  }

  public async getPokemon (
    { payload }:
    { payload: PokemonPayload }): Promise<[object, ApiError]> {
    const url = `${this.baseUrl}${payload.query.pokemon}`
    const httpParams = {
      url,
      timeout: 3000
    }

    const apiResponse = await this.api.get(httpParams)
    const pokemonDtoMapper = dtoMapper(PokemonDto)

    return compose(
      pokemonDtoMapper,
      projectCatcher
    )(apiResponse)
  }
}
