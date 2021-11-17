import { Request, Response, NextFunction } from "express";
import {
  body,
  param,
  validationResult,
  CustomValidator,
} from "express-validator";
import { user } from "../interfaces/interface";
import {
  noDuplication,
  noSymbols,
  atLeast,
} from "../utilites/customValidatorFun";
const validationRule = (method: string) => {
  let hello: user = {
    createId: [body("id").isAlphanumeric(), body("character").isAlpha()],
    requestId: [body("id").isAlphanumeric(), body("request").isString()],
    stringValidate: [
      body("value")
        // .custom(noSpace)
        .custom(noSymbols)
        .custom(atLeast)
        .custom(noDuplication),
    ],
    Id: [param("id").isAlphanumeric()],
  };
  return hello[method];
};
export { validationRule };
