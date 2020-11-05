
import { get } from '@helpers/functionHelpers'
import Pokemon from '@modules/pokemon/interfaces/Pokemon'
import PokemonTypes from '@modules/pokemon/interfaces/PokemonTypes'
import PokemonAvatar from '@modules/pokemon/interfaces/PokemonAvatar'

interface Response {
  id: number;
  name: string;
  order: string;
  sprites: PokemonAvatar;
  types: PokemonTypes[];
}

export default class PokemonDto {
  private name: string;
  private pokemonId: string;
  private types: PokemonTypes[];
  private image: PokemonAvatar;
  private order: string;

  public constructor (response: Response) {
    this.name = get(response, 'name')
    this.pokemonId = get(response, 'id')
    this.types = get(response, 'types')
    this.order = get(response, 'order')
    this.image = get(response, 'sprites')
  }

  public parse (): Pokemon {
    return {
      pokemonId: this.pokemonId,
      name: this.name,
      order: this.order,
      image: this.image,
      types: this.types
    }
  }
}
