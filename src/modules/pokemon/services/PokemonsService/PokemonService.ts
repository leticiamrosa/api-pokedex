import PokemonsRepository from '@modules/pokemon/repositories/PokemonsRepository'
import PokemonPayload from '@modules/pokemon/payloads/PokemonPayload'

interface Dependencies {
  pokemonsRepository: PokemonsRepository;
}

export default class PokemonsService {
  private pokemonsRepository: PokemonsRepository;

  public constructor ({ pokemonsRepository }: Dependencies) {
    this.pokemonsRepository = pokemonsRepository
  }

  public async getPokemons (): Promise<[object, object]> {
    const response = await this.pokemonsRepository.getPokemons()

    return response
  }

  public async getPokemon ({ pokemon }): Promise<[object, object]> {
    const payload = new PokemonPayload({ pokemon })

    const response = await this.pokemonsRepository.getPokemon({ payload })

    return response
  };
}
