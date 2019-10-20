import { Router } from 'express'
import { EmployeeController } from './employeeController'
import { authenticateUser, isAdmin } from '@lib/authService'

const router = Router()
const controller = new EmployeeController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.post('/login', controller.authenticate)
router.post('/', controller.store)
router.put('/', authenticateUser, controller.update)
router.delete('/:_id', [authenticateUser, isAdmin], controller.destroy)

export const EmployeeRouter = router
