import { Router } from 'express'
import { TimelineController } from '../controllers/TimelineController'

const router = Router()
const controller = new TimelineController()

router.get('/', controller.index)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.destroy)

export const TimelineRouter = router
