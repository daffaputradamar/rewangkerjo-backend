import { Request, Response } from 'express'
import { Vendor } from './vendorModel'
import { IVendor } from './IVendor'

import { forceCast } from '@lib/forceCast'
import { responseBody, responseBodyError } from '@lib/response'
import { ObjectId } from 'bson'

export class VendorController {
    public async index(req: Request, res: Response) {
        res.json(await Vendor.find())
    }

    public async show(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const vendor = await Vendor.findById(req.params._id)
        if (vendor) {
            responseBody(res, vendor)
        }
        responseBodyError(res, 'Vendor not found')
    }

    public async store(req: Request, res: Response) {
        let _newVendor = forceCast<IVendor>(req.body)
        const _vendor = await Vendor.findOne({
            name: _newVendor.name,
        })
        if (_vendor) {
            responseBodyError(res, 'Vendor is already exist')
        }
        const newVendor = await Vendor.create(_newVendor)
        responseBody(res, newVendor)
    }

    public async destroy(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const deletedVendor = await Vendor.findByIdAndDelete(req.params._id)
        responseBody(res, deletedVendor)
    }
}
