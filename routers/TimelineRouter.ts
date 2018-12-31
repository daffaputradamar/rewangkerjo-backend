import { Router } from "express"
import { TimelineController } from "../controllers/TimelineController"
import { verifyToken } from "../middlewares/verifyToken"

const router = Router()
const controller = new TimelineController()

router.get("/", controller.index)
router.use(verifyToken)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const TimelineRouter = router
