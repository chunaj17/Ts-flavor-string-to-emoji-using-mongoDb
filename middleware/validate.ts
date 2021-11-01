import { Request, Response, NextFunction } from "express";
import {
  body,
  param,
  ValidationChain,
  validationResult,
} from "express-validator";
type user = {
  [key: string]: ValidationChain[];
};
const validationRule = (method: string) => {
  let hello: user = {
    createId: [body("id").isAlphanumeric(), body("character").isAlpha()],
    requestId: [body("id").isAlphanumeric(), body("request").isString()],
    Id: [param("id").isAlphanumeric()],
  };
  return hello[method];
};
const validateReq = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({
      msg: "invalid entry checkout ur entry on req-body or req-param",
      error: error.array(),
    });
  }
  next();
};
export { validationRule, validateReq };
