import { Router } from "express"
import { SupportedByController } from "../controllers/SupportedByController"
import { verifyToken } from "../middlewares/verifyToken"

const router = Router()
const controller = new SupportedByController()

router.get("/", controller.index)
router.use(verifyToken)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const SupportedByRouter = router
