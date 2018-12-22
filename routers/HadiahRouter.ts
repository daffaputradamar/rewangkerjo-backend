import { Router } from 'express'
import { HadiahController } from '../controllers/HadiahController'

const router = Router()
const controller = new HadiahController()

router.get('/', controller.index)
router.post('/', controller.store)
router.delete('/:_id', controller.destroy)

export const HadiahRouter = router 