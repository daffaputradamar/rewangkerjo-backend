import { Router } from "express"
import { KontakController } from "../controllers/KontakController"

const router = Router()
const controller = new KontakController()

router.get("/", controller.index)
router.post("/", controller.store)
router.delete("/:_id", controller.destroy)

export const KontakRouter = router
