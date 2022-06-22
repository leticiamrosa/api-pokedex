
export const getPokemonImageString = (url: string): string => {
  if (!url) return

  const regexOnlyNumbers: RegExp = /\d/g
  const pokemonNumber = url.match(regexOnlyNumbers).join('').replace(/^./, '')

  if (!pokemonNumber) return

  const urlPokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`

  return urlPokemonImage
}
