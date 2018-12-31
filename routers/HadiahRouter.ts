import { Router } from "express"
import { HadiahController } from "../controllers/HadiahController"
import { verifyToken } from "../middlewares/verifyToken"

const router = Router()
const controller = new HadiahController()

router.get("/", controller.index)
router.use(verifyToken)
router.post("/", controller.store)
router.delete("/:_id", controller.destroy)

export const HadiahRouter = router
