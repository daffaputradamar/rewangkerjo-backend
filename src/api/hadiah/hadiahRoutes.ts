import { Router } from "express"
import { HadiahController } from "./HadiahController"
import { authenticateUser } from "@lib/verifyToken"

const router = Router()
const controller = new HadiahController()

router.get("/", controller.index)
router.use(authenticateUser)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const HadiahRouter = router
