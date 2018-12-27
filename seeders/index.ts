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