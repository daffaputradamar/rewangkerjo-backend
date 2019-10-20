import { model, Schema } from 'mongoose'
import { ICategory } from './ICategory'

const CategorySchema = new Schema({
    name: String,
    color: String,
})

export const Category = model<ICategory>('Category', CategorySchema)
