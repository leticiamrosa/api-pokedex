import { Router } from 'express';
import PokemonsRepository from '@repositories/PokemonsRepository/PokemonsRepository';
import PokemonsServicesFactory from 'src/services/PokemonsService.ts/PokemonsServiceFactory';

const PokemonsRouter = Router();

PokemonsRouter.get('/', async (req, res) => {
  try {
    const pokemonsService = new PokemonsServicesFactory().build();
    const pokemons = await pokemonsService.getPokemon();

    return res.status(200).json(pokemons);

  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default PokemonsRouter;