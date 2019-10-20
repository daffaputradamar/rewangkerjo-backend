import { Router } from 'express'
import { EventController } from './eventController'
import { authenticateUser, isAdmin } from '@lib/authService'

const router = Router()
const controller = new EventController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.post('/', authenticateUser, controller.store)
router.put('/:_id', authenticateUser, controller.update)
router.delete('/:_id', [authenticateUser, isAdmin], controller.destroy)

export const EventRouter = router
