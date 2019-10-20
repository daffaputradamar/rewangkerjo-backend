import { Request, Response } from 'express'
import { Category } from './categoryModel'
import { ICategory } from './ICategory'

import { forceCast } from '@lib/forceCast'
import { responseBody, responseBodyError } from '@lib/response'
import { ObjectId } from 'bson'

export class CategoryController {
    public async index(req: Request, res: Response) {
        res.json(await Category.find())
    }

    public async show(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const category = await Category.findById(req.params._id)
        if (category) {
            responseBody(res, category)
        }
        responseBodyError(res, 'Category not found')
    }

    public async store(req: Request, res: Response) {
        let _newCategory = forceCast<ICategory>(req.body)
        const _category = await Category.findOne({
            name: _newCategory.name,
        })
        if (_category) {
            responseBodyError(res, 'Category is already exist')
        }
        const newCategory = await Category.create(_newCategory)
        responseBody(res, newCategory)
    }

    public async destroy(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const deletedCategory = await Category.findByIdAndDelete(req.params._id)
        responseBody(res, deletedCategory)
    }
}
