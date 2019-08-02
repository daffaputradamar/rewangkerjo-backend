import dotenv from "dotenv"
dotenv.config()
import { Document, Model } from "mongoose"
import "../config/db"

// function to do seeding
function seed(model: Model<Document, {}>, data: any[]) {
  model.collection.deleteMany({})
  model.create(data)
}

// seeding supportedBy
import { SupportedBy } from "../models/SupportedBy"
import supportedByData from "./supportedBy"
seed(SupportedBy, supportedByData)

// seeding timeline
import { Timeline } from "../models/Timeline"
import timelineData from "./timeline"
seed(Timeline, timelineData)

// seeding mediaPartner
import { MediaPartner } from "../models/MediaPartner"
import mediaPartnerData from "./mediaPartner"
seed(MediaPartner, mediaPartnerData)

// seeding Universitas
import { Universitas } from "../models/Universitas"
import universitasData from "./universitas"
seed(Universitas, universitasData)

// seeding User
import { User } from "../models/User"
import userData from "./user"
seed(User, userData)

// seeding Hadiah
import { Hadiah } from "../models/Hadiah"
import hadiahData from "./hadiah"
seed(Hadiah, hadiahData)

// seeding Tim
import { Tim } from "../models/Tim"
import timData from "./tim"
seed(Tim, timData)

// seeding Kontak
import { Kontak } from "../models/Kontak"
import kontakData from "./kontak"
seed(Kontak, kontakData)

// seeding Peserta
import { Peserta } from "../models/Peserta"
import pesertaData from "./peserta"
seed(Peserta, pesertaData)
