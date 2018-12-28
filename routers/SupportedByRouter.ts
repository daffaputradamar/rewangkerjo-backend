import { Router } from "express"
import { SupportedByController } from "../controllers/SupportedByController"

const router = Router()
const controller = new SupportedByController()

router.get("/", controller.index)
router.post("/", controller.store)
router.delete("/:_id", controller.destroy)

export const SupportedByRouter = router
