import PokemonImage from '@modules/pokemon/interfaces/PokemonImage'

export default interface Pokemon {
  pokemonId: string;
  name: string;
  order: string;
  types: object[];
  image: PokemonImage;
}
