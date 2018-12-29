import { Router } from "express"
import { TimController } from "../controllers/TimController"
import { verifyToken } from "../config/verifyToken";

const router = Router()
const controller = new TimController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.use(verifyToken)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const TimRouter = router
