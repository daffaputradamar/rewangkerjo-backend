const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SampleSchema = new Schema ({
    sampleField: {
        type: String
    }
})

module.exports = mongoose.model('Sample', SampleSchema)