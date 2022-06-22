
import { get } from '@helpers/functionHelpers'
import { getPokemonImageString } from '@helpers/pokemonImageHelpers'

interface IPokemon {
  name: string
  url: string
  image?: string
}

interface Response {
  pokemons: IPokemon[];
}

export default class PokemonsDto {
  private pokemons: IPokemon[];

  public constructor (response: Response) {
    const pokemons = get(response, 'results')
    this.pokemons = this.parsePokemons(pokemons)
  }

  private parsePokemons (pokemons: IPokemon[]): IPokemon[] {
    const parsedPokemons = pokemons && pokemons.map(pokemon => ({
      name: pokemon.name,
      url: pokemon.url,
      image: getPokemonImageString(pokemon.url)
    }))

    return parsedPokemons
  }

  public parse (): Response {
    return {
      pokemons: this.pokemons
    }
  }
}
