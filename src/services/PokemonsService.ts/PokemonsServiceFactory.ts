import Api from '@utils/api/Api'

import PokemonsRepository from '@repositories/PokemonsRepository/PokemonsRepository'
import PokemonsService from './PokemonService'

export default class PokemonsServicesFactory {
  private pokemonsRepository: PokemonsRepository

  public constructor () {
    this.pokemonsRepository = new PokemonsRepository({
      api: new Api()
    })
  }

  public build (): PokemonsService {
    return new PokemonsService({
      pokemonsRepository: this.pokemonsRepository
    })
  }
}
