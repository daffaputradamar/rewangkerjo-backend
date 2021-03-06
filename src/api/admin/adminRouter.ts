import { Router } from 'express'
import { AdminController } from './adminController'
import { authenticateUser, isAdmin } from '@lib/authService'

const router = Router()
const controller = new AdminController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.post('/login', controller.authenticate)
router.post('/', controller.store)
router.delete('/:_id', [authenticateUser, isAdmin], controller.destroy)

export const AdminRouter = router
