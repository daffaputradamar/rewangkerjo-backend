"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timelineModel_1 = require("./timelineModel");
class TimelineController {
    index(req, res) {
        timelineModel_1.Timeline.find({}).then((data) => res.json(data));
    }
    store(req, res) {
        timelineModel_1.Timeline.create(Object.assign({}, req.body)).then((data) => res.json(data));
    }
    destroy(req, res) {
        timelineModel_1.Timeline.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data));
    }
    update(req, res) {
        timelineModel_1.Timeline.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { new: true }).then((data) => res.json(data));
    }
}
exports.TimelineController = TimelineController;
