import { Router } from "express";
import { PesertaController } from "../controllers/PesertaController";

const router = Router()
const controller = new PesertaController()

router.get('/:idteam', controller.show)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.destroy)

export const PesertaRouter = router