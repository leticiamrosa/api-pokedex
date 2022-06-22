import { Router } from 'express'
import PokemonsServicesFactory from '@modules/pokemon/services/PokemonsService/PokemonsServiceFactory'
import RouterResponse from '@utils/RouterResponse/RouterResponse'

const PokemonsRouter = Router()

PokemonsRouter.get('/', async (req, res) => {
  const response = new RouterResponse({ routerResponse: res })

  try {
    const pokemonsService = new PokemonsServicesFactory().build()
    const pokemons = await pokemonsService.getPokemons()

    return response.send({
      payloadStatus: 200,
      payloadData: pokemons[0]
    })
  } catch (error) {
    return response.sendError({
      payloadStatus: 400,
      payloadError: {
        error: error.message
      }
    })
  }
})

PokemonsRouter.get('/:pokemon', async (req, res) => {
  const { pokemon } = req.params

  const response = new RouterResponse({ routerResponse: res })

  try {
    const pokemonsService = new PokemonsServicesFactory().build()
    const pokemons = await pokemonsService.getPokemon({ pokemon })

    return response.send({
      payloadStatus: 200,
      payloadData: pokemons[0]
    })
  } catch (error) {
    return response.sendError({
      payloadStatus: 400,
      payloadError: {
        error: error.message
      }
    })
  }
})

export default PokemonsRouter
