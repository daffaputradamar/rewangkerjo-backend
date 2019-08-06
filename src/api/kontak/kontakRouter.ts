import { Router } from "express"
import { KontakController } from "@api/kontak/kontakController"
import { authenticateUser } from "@lib/authService"

const router = Router()
const controller = new KontakController()

router.get("/", controller.index)
router.use(authenticateUser)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const KontakRouter = router
