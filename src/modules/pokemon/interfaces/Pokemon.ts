import PokemonAvatar from '@modules/pokemon/interfaces/PokemonAvatar'

export default interface Pokemon {
  pokemonId: string;
  name: string;
  order: string;
  types: object[];
  image: PokemonAvatar;
}
