import { Router } from 'express'
import { PesertaController } from '../controllers/PesertaController'
import multer from 'multer'

const uploadKtm = multer({ dest: 'uploads/ktm/' })
const uploadFoto = multer({ dest: 'uploads/foto/' })

const router = Router()
const controller = new PesertaController()

router.get('/:idteam', controller.show)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.put('/:_id/ktm', uploadKtm.single('ktm'), controller.updateKtm)
router.put('/:_id/foto', uploadFoto.single('foto'), controller.updateFoto)
router.delete('/:_id', controller.destroy)

export const PesertaRouter = router
