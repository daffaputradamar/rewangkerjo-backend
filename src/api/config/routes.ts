import { Router } from 'express'
const router: Router = Router()
export default router

import { EmployeeRouter } from '@api/employee/employeeRouter'
import { AdminRouter } from '@api/admin/adminRouter'
import { CategoryRouter } from '@api/category/categoryRouter'
import { VendorRouter } from '@api/vendor/vendorRouter'
import { EventRouter } from '@api/event/eventRouter'

router.use('/admin', AdminRouter)
router.use('/employee', EmployeeRouter)
router.use('/category', CategoryRouter)
router.use('/vendor', VendorRouter)
router.use('/event', EventRouter)
