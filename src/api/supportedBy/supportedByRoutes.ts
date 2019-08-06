import { Router } from "express"
import { SupportedByController } from "./supportedByController"
import { authenticateUser } from "@lib/authService"

const router = Router()
const controller = new SupportedByController()

router.get("/", controller.index)
router.use(authenticateUser)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const SupportedByRouter = router
