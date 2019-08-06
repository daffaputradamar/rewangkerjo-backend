import { Router } from "express"
import { HadiahController } from "./hadiahController"
import { authenticateUser } from "@lib/authService"

const router = Router()
const controller = new HadiahController()

router.get("/", controller.index)
router.use(authenticateUser)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const HadiahRouter = router
