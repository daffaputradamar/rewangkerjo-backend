import { Router } from "express"
import multer from "multer"
import { PesertaController } from "../controllers/PesertaController"

const uploadKtm = multer({ dest: "uploads/ktm/" })
const uploadFoto = multer({ dest: "uploads/foto/" })

const router = Router()
const controller = new PesertaController()

router.get("/:idteam", controller.show)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.put("/:_id/ktm", uploadKtm.single("ktm"), controller.updateKtm)
router.put("/:_id/foto", uploadFoto.single("foto"), controller.updateFoto)
router.delete("/:_id", controller.destroy)

export const PesertaRouter = router
