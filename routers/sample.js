const express = require('express')
const router = express.Router()
const sample = require('../controllers/sample')

router.get('/', sample.index)
router.get('/:_id', sample.show)
router.post('/', sample.store)
router.put('/:_id', sample.update)
router.delete('/:_id', sample.destroy)

module.exports = router

