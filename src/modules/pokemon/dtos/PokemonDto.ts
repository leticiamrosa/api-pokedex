
import { get } from '@helpers/functionHelpers'
import Pokemon from '@modules/pokemon/interfaces/Pokemon'
import PokemonTypes from '@modules/pokemon/interfaces/PokemonTypes'
import PokemonImage from '@modules/pokemon/interfaces/PokemonImage'

interface Response {
  id: number;
  name: string;
  order: string;
  sprites: PokemonImage;
  types: PokemonTypes[];
}

interface Sprites {
  back_default: string;
  front_default: string;
}

export default class PokemonDto {
  private name: string;
  private pokemonId: string;
  private types: PokemonTypes[];
  private image: PokemonImage;
  private order: string;

  public constructor (response: Response) {
    const sprites = get(response, 'sprites')

    this.name = get(response, 'name')
    this.pokemonId = get(response, 'id')
    this.types = get(response, 'types')
    this.order = get(response, 'order')
    this.image = this.parsePokemonImage(sprites)
  }

  private parsePokemonImage (sprites: Sprites): PokemonImage {
    return {
      backDefault: sprites.back_default,
      frontDefault: sprites.front_default
    }
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
