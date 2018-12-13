import { Router } from 'express'
import { SampleController } from '../controllers/SampleController'

const router = Router()
const controller = new SampleController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.destroy)

export const SampleRouter = router
