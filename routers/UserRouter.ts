import { Router } from "express"
import { UserController } from "../controllers/UserController"
import { verifyToken } from "../middlewares/verifyToken"

const router = Router()
const controller = new UserController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.post("/login", controller.authenticate)
router.use(verifyToken)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const UserRouter = router
