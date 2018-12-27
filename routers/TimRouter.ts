import { Router } from 'express'
import { TimController } from '../controllers/TimController'

const router = Router()
const controller = new TimController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.destroy)

export const TimRouter = router
