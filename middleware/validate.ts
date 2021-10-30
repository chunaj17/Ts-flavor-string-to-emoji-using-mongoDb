import { Request, Response, NextFunction } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
type user = {
  [key: string]: ValidationChain[];
};
const validationRule = (method: string) => {
  let hello: user = {
    createId: [body("id").isAlphanumeric(), body("character").isAlpha()],
    requestId: [body("id").isAlphanumeric(), body("request").isString()],
  };
  return hello[method];
};
const validateReq = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({
      msg: "invalid entry checkout ur entry",
      data: "ur reqBody must be in the form like below",
      form: {
        id: `"some string in here" or numeric value`,
        character: "here only string allowed",
      },
      error: error.array(),
    });
  }
  next();
};
export { validationRule, validateReq };
