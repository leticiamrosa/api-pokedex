import PokemonsRepository from '@repositories/PokemonsRepository/PokemonsRepository'

interface Dependencies {
  pokemonsRepository: PokemonsRepository;
}

interface Request {
  pokemon: string;
}

export default class PokemonsService {
  private pokemonsRepository: PokemonsRepository;

  public constructor ({ pokemonsRepository }: Dependencies) {
    this.pokemonsRepository = pokemonsRepository
  }

  public async getPokemon () {
    const response = await this.pokemonsRepository.getPokemons()

    return response
  }
}
