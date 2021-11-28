import { body, param } from 'express-validator'
import { user } from '../interfaces/interface'
import {
  noDuplication,
  noSymbols,
  atLeast,
  idMatched,
  findId,
} from '../utilites/customValidatorFun'
const validationRule = (method: string) => {
  let hello: user = {
    createId: [
      body('id').isAlphanumeric().custom(idMatched),
      body('character').isAlpha(),
    ],
    requestId: [
      body('id').isAlphanumeric().custom(findId),
      body('request').isString(),
    ],
    stringValidate: [
      body('value').custom(noSymbols).custom(atLeast).custom(noDuplication),
    ],
    Id: [param('id').isAlphanumeric().custom(findId)],
  }
  return hello[method]
}
export { validationRule }
