import { Request, Response } from "express"
import { Pengumpulan } from "./pengumpulanModel"

export class PengumpulanController {
  public index(req: Request, res: Response) {
    Pengumpulan
        .find({
            tim: req.params._idtim
        })
        .populate("jenisPengumpulan")
        .populate("tim")
        .exec()
        .then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    Pengumpulan
        .findById(req.params._id)
        .populate("jenisPengumpulan")
        .populate("tim")
        .exec()
        .then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    let _pengumpulan = req.body
    console.log(_pengumpulan)
    Pengumpulan.findOne({
      jenisPengumpulan: _pengumpulan.jenisPengumpulan,
      tim: _pengumpulan.tim
    })
    .then(__pengumpulan => {
      if (!__pengumpulan) {
        _pengumpulan.tim = req.params._idtim
        return Pengumpulan.create({ ..._pengumpulan})
      }
      return Pengumpulan.findOneAndUpdate(
        {_id: __pengumpulan._id},
        { $set: req.body },
        { new: true },
      )
    })
    .then((data) => res.json(data))
  }

  public update(req: Request, res: Response){
    Pengumpulan.findOneAndUpdate(
      {_id: req.params._id},
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Pengumpulan.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
