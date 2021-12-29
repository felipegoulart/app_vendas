import { Router } from 'express'

const routes = Router()

routes.get('/', (resquest, response) => response.json({ message: 'Fala Dev' }))

export default routes
