import { Router } from 'express'
const router: Router = Router()
export default router

import { EmployeeRouter } from '@api/employee/employeeRouter'
import { AdminRouter } from '@api/admin/adminRouter'
import { CategoryRouter } from '@api/category/categoryRouter'
import { VendorRouter } from '@api/vendor/vendorRouter'
import { EventRouter } from '@api/event/eventRouter'
import { AssignmentRouter } from '@api/assignment/assignmentRouter'
import { NotificationRouter } from '@api/notification/notificationRouter'

router.use('/admin', AdminRouter)
router.use('/employee', EmployeeRouter)
router.use('/category', CategoryRouter)
router.use('/vendor', VendorRouter)
router.use('/event', EventRouter)
router.use('/assignment', AssignmentRouter)
router.use('/notification', NotificationRouter)
