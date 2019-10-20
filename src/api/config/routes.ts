import { Router } from 'express'
const router: Router = Router()
export default router

import { EmployeeRouter } from '@api/employee/employeeRouter'
import { AdminRouter } from '@api/admin/adminRouter'

router.use('/admin', AdminRouter)
router.use('/employee', EmployeeRouter)
