import { Router } from "express"
import { UserController } from "../controllers/UserController"

const router = Router()
const controller = new UserController()

router.get("/", controller.index)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const UserRouter = router
