import { Router } from 'express'
import { authenticateUser, isAdmin, mustAdmin } from '@lib/authService'
import { AssignmentController } from './assignmentController'

const router = Router()
const controller = new AssignmentController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.use(authenticateUser)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.destroy)

export const AssignmentRouter = router
