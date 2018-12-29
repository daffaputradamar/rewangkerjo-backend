import { Router } from "express"
import { SampleController } from "../controllers/SampleController"
import { verifyToken } from "../config/verifyToken";

const router = Router()
const controller = new SampleController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.use(verifyToken)
router.get("/mysample", controller.mysample)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const SampleRouter = router
