import { Router } from "express"
import { UniversitasController } from "../controllers/UniversitasController"

const router = Router()
const controller = new UniversitasController()

router.get("/", controller.index)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const UniversitasRouter = router
