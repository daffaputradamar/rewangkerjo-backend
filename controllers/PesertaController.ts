import { Request, Response } from 'express';
import { Peserta } from '../models/Peserta';

export class PesertaController {
   public show(req: Request, res: Response) {
      Peserta.findById(req.params.idteam).then((data) => res.json(data));
   }

   public store(req: Request, res: Response) {
      Peserta.create(req.body.peserta).then((data) => res.json(data));
   }

   public update(req: Request, res: Response) {
      Peserta.findOneAndUpdate(
         { _id: req.params._id },
         { $set: req.body.peserta },
         { new: true }
      ).then((data) => res.json(data));
   }

   public destroy(req: Request, res: Response) {
      Peserta.findOneAndDelete({ _id: req.params._id }).then((data) =>
         res.json(data)
      )
   }
}
