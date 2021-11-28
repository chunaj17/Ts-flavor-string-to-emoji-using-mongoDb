import { Request } from 'express'
import { ValidationChain } from 'express-validator'
interface arrInterface {
  key: string
  value: number
}
type keyValue = {
  [key: string]: number
}
type user = {
  [key: string]: ValidationChain[]
}
interface dbInterface {
  _id: any
  id: string
  character: string
  __v: number
  requests: object
}
export { arrInterface, keyValue, user, dbInterface }
