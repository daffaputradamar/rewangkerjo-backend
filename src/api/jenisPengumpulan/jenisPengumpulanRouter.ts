import { Router } from "express"
import { JenisPengumpulanController } from "./jenisPengumpulanController"
import { authenticateUser } from "@lib/authService"

const router = Router()
const controller = new JenisPengumpulanController()

router.get("/", controller.index)
router.use(authenticateUser)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const JenisPengumpulanRouter = router
