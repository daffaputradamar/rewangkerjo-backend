import { Router } from 'express'
import { MediaPartnerController } from '../controllers/MediaPartnerController'

const router = Router()
const controller = new MediaPartnerController()

router.get('/', controller.index)
router.post('/', controller.store)
router.delete('/:id', controller.destroy)

export const MediaPartnerRouter = router