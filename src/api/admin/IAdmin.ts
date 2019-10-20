import { Document } from 'mongoose'
import { IUser } from '@config/interfaces/IUser'

export interface IAdmin extends Document, IUser {}
