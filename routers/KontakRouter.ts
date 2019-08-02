import { Router } from "express"
import { KontakController } from "../controllers/KontakController"
import { verifyToken } from "../middlewares/verifyToken"

const router = Router()
const controller = new KontakController()

router.get("/", controller.index)
router.use(verifyToken)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const KontakRouter = router
