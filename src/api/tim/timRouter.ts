import { Router } from "express"
import { TimController } from "./timController"
import { PesertaController } from "@api/peserta/pesertaController";
import { PengumpulanController } from "@api/pengumpulan/pengumpulanController";

import { authenticateUser } from "@lib/authService"

const router = Router()
const controller = new TimController()
const pesertaController = new PesertaController()
const pengumpulanController = new PengumpulanController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.post("/login", controller.authenticate)
router.put("/:_id", authenticateUser, controller.update)
router.delete("/:_id", authenticateUser, controller.destroy)

router.get("/:_idtim/peserta", pesertaController.index)
router.get("/:_idtim/peserta/:_id", pesertaController.show)
router.post("/:_idtim/peserta", pesertaController.store)
router.put("/:_idtim/peserta/:_id", authenticateUser, pesertaController.update)
router.delete("/:_idtim/peserta/:_id", authenticateUser, pesertaController.destroy)

router.use(authenticateUser)
router.get("/:_idtim/pengumpulan", pengumpulanController.index)
router.get("/:_idtim/pengumpulan/:_id", pengumpulanController.show)
router.post("/:_idtim/pengumpulan", pengumpulanController.store)
router.put("/:_idtim/pengumpulan/:_id", pengumpulanController.update)
router.delete("/:_idtim/pengumpulan/:_id", pengumpulanController.destroy)

export const TimRouter = router
