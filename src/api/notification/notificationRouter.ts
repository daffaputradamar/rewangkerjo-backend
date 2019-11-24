import { Router } from 'express'
import { authenticateUser } from '@lib/authService'
import { NotificationController } from './notificationController'

const router = Router()
const controller = new NotificationController()

router.use(authenticateUser)
router.get('/', controller.index)
router.put('/', controller.update)

router.post('/', controller.store)

export const NotificationRouter = router
