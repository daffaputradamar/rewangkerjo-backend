import { Router } from "express"
import { TimelineController } from "./timelineController"
import { authenticateUser } from "@lib/verifyToken"

const router = Router()
const controller = new TimelineController()

router.get("/", controller.index)
router.use(authenticateUser)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const TimelineRouter = router
