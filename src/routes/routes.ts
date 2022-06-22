import { Router } from 'express'

import PokemonsRouter from '@routes/PokemonsRouter/PokemonsRouter'

const routes = Router()
const baseUrl = '/api/v1'

routes.use(`${baseUrl}/pokemons`, PokemonsRouter)

export default routes
