import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
const router = Router()

router.post('/users', async (req, res): Promise<void> => {
  await createUserController.handle(req, res)
})

export { router }
