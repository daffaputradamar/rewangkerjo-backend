import { Router } from "express"
import { UniversitasController } from '../controllers/UniversitasController'

const router = Router()
const controller = new UniversitasController()

router.get('/:id', controller.show)

export const UniversitasRouter = router