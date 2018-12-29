import { Router } from "express"
import { UniversitasController } from "../controllers/UniversitasController"
import { verifyToken } from "../config/verifyToken";

const router = Router()
const controller = new UniversitasController()

router.get("/", verifyToken, controller.index)

export const UniversitasRouter = router
