import { Router } from 'express'
import { VendorController } from './vendorController'
import { authenticateUser, isAdmin, mustAdmin } from '@lib/authService'

const router = Router()
const controller = new VendorController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.use([authenticateUser, isAdmin, mustAdmin])
router.post('/', controller.store)
router.delete('/:_id', controller.destroy)

export const VendorRouter = router
