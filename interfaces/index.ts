import { Document } from 'mongoose'

interface IHadiah extends Document {
  judul: string
  nominal: number
}

interface IKontak extends Document {
  nama: string
  telp: string
}

interface IMediaPartner extends Document {
  nama: string
  logo: string
}

interface IPeserta extends Document {
  nama: string
  nim: string
  ktm: string
  foto: string
  user: string
}

interface ISupportedBy extends Document {
  nama: string
  logo: string
}

interface ITim extends Document {
  nama: string
  universitas: string
  ketua: string
  peserta: string[]
  namaAplikasi: string
  fileProposal: string
  filePresentasiVideo: string
  fileDemo: string
  fileAplikasi: string
  statusTim: IStatusTim
}

interface IStatusTim {
  tahapPertama: boolean
  tahapKedua: boolean
}

interface ITimeline extends Document {
  nama: string
  tgl_mulai: Date
  tgl_selesai: Date
  deskripsi: string
}

interface IUniversitas extends Document {
  nama: string
}

interface IUser extends Document {
  username: string
  email: string
  password: string
  isAdmin: boolean
}

export {
  IHadiah,
  IKontak,
  IMediaPartner,
  IPeserta,
  ISupportedBy,
  ITim,
  ITimeline,
  IUniversitas,
  IUser
}
