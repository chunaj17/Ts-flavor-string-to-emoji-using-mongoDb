import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
export const validateReq = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(422).json({
      msg: "invalid entry",
      error: error.array(),
    });
  }
  next();
};
