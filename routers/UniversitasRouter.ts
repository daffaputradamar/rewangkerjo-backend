import { Router } from "express"
import { UniversitasController } from '../controllers/UniversitasController'

const router = Router()
const controller = new UniversitasController()


router.get('/', controller.index)

export const UniversitasRouter = router