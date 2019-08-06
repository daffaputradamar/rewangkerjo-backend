import { Router } from "express"
import { AdminController } from "./adminController"
import { authenticateUser } from "@lib/verifyToken"

const router = Router()
const controller = new AdminController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.post("/login", controller.authenticate)
router.use(authenticateUser)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const AdminRouter = router
