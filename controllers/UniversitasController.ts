// import { Universitas } from "../models/Universitas"
import axios from "axios"
import { Request, Response } from "express"

export class UniversitasController {
  public index(req: Request, res: Response) {
    // Universitas.find({}).then((data) => res.json(data))
    axios.get("https://listuniv.herokuapp.com/").then((response) => {
      let num = 1
      const namaUniv = response.data.map((data: { name: any }) => ({
        _id: num++,
        nama: data.name,
      }))
      res.json(namaUniv)
    })
  }
}
