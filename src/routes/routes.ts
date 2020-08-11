import { Router } from 'express';

import PokemonsRouter from '@routes/PokemonsRouter/PokemonsRouter';
const routes = Router();

routes.use('/pokemons', PokemonsRouter);

export default routes;