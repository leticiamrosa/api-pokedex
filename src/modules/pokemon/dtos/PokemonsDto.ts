
import { get } from '@helpers/functionHelpers'

interface Response {
  pokemons: object[];
}

export default class PokemonsDto {
  private pokemons: object[];

  public constructor (response: Response) {
    this.pokemons = get(response, 'results')
  }

  public parse (): Response {
    return {
      pokemons: this.pokemons
    }
  }
}
