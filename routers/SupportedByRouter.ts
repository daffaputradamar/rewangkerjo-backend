import { Router } from "express"
import { SupportedByController } from "../controllers/SupportedByController"
import { verifyToken } from "../config/verifyToken";

const router = Router()
const controller = new SupportedByController()

router.get("/", controller.index)
router.use(verifyToken)
router.post("/", controller.store)
router.delete("/:_id", controller.destroy)

export const SupportedByRouter = router
