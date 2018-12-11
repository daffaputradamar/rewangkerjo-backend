const Sample = require('../models/Sample')

module.exports = {
    index: function (req, res) {
        Sample
            .find()
            .then(data => res.json(data))
    },
    show: function (req, res) {
        Sample
            .findById(req.params._id)
            .then(data => res.json(data))
    },
    store: function (req, res) {
        Sample
            .create(req.body.sample)
            .then(data => res.json(data))
    },
    update: function (req, res) {
        Sample
            .findOneAndUpdate({ _id: req.params._id }, { $set: req.body.sample }, { new: true })
            .then(data => res.json(data))
    },
    destroy: function (req, res) {
        Sample
            .findOneAndDelete({ _id: req.params._id })
            .then(data => res.json(data))
    }
}