import { Router } from "express"
import { TimController } from "./timController"
import { PesertaController } from "@api/peserta/pesertaController";
import { authenticateUser } from "@lib/authService"

const router = Router()
const controller = new TimController()
const pesertaController = new PesertaController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.post("/login", controller.authenticate)
router.put("/:_id", authenticateUser, controller.update)
router.delete("/:_id", authenticateUser, controller.destroy)

router.post("/:_idtim/peserta", pesertaController.store)
router.get("/:_idtim/peserta", pesertaController.index)
router.get("/:_idtim/peserta/:_id", pesertaController.show)
router.put("/:_idtim/peserta/:_id", authenticateUser, pesertaController.update)
router.delete("/:_idtim/peserta/:_id", authenticateUser, pesertaController.destroy)

export const TimRouter = router
