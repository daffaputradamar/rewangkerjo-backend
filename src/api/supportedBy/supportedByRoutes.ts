import { Router } from "express"
import { SupportedByController } from "./SupportedByController"
import { verifyToken } from "@lib/verifyToken"

const router = Router()
const controller = new SupportedByController()

router.get("/supportedBy", controller.index)
router.use(verifyToken)
router.post("/supportedBy", controller.store)
router.put("/supportedBy/:_id", controller.update)
router.delete("supportedBy/:_id", controller.destroy)

export const SupportedByRouter = router
