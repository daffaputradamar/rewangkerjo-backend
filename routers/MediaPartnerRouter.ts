import { Router } from "express"
import { MediaPartnerController } from "../controllers/MediaPartnerController"
import { verifyToken } from "../config/verifyToken";

const router = Router()
const controller = new MediaPartnerController()

router.get("/", controller.index)
router.use(verifyToken)
router.post("/", controller.store)
router.delete("/:id", controller.destroy)

export const MediaPartnerRouter = router
