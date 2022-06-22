import { Router } from 'express'
import PokemonsServicesFactory from '@modules/pokemon/services/PokemonsService/PokemonsServiceFactory'

const PokemonsRouter = Router()

PokemonsRouter.get('/', async (req, res) => {
  try {
    const pokemonsService = new PokemonsServicesFactory().build()
    const pokemons = await pokemonsService.getPokemons()

    return res.status(200).json(pokemons)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

PokemonsRouter.get('/:pokemon', async (req, res) => {
  const { pokemon } = req.params

  try {
    const pokemonsService = new PokemonsServicesFactory().build()
    const pokemons = await pokemonsService.getPokemon({ pokemon })

    return res.status(200).json(pokemons)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default PokemonsRouter
