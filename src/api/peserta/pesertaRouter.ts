import { Router } from "express"
import multer from "multer"
import { PesertaController } from "./pesertaController"
import { authenticateUser } from "@lib/authService"

const storageKtm = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/ktm/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const storageFoto = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/foto/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploadKtm = multer({ storage: storageKtm })
const uploadFoto = multer({ storage: storageFoto })

const router = Router()
const controller = new PesertaController()

router.use(authenticateUser)
router.put("/:_id/ktm", uploadKtm.single("ktm"), controller.updateKtm)
router.put("/:_id/foto", uploadFoto.single("foto"), controller.updateFoto)

export const PesertaRouter = router
