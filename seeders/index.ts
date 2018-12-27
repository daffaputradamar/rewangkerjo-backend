require('dotenv').config()
require('../config/db')
import { Model, Document } from 'mongoose'

// function to do seeding
function seed(model: Model<Document, {}>, data: any[]) {
  model.collection.deleteMany({})
  model.create(data)
}

// seeding supportedBy
import { SupportedBy } from '../models/SupportedBy'
import supportedByData from './supportedBy'
seed(SupportedBy, supportedByData)

// seeding timeline
import { Timeline } from '../models/Timeline'
import timelineData from './timeline'
seed(Timeline, timelineData)

// seeding mediaPartner
import { MediaPartner } from '../models/MediaPartner'
import mediaPartnerData from './mediaPartner'
seed(MediaPartner, mediaPartnerData)
