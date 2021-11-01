import { Response, NextFunction, Request } from "express";
import { keyValue, shareInterface } from "../interfaces/interface";
const counter = (text: string) => {
  const val: keyValue = {};
  text
    .replace(/\s/g, "")
    .split("")
    .forEach((e: string) => {
      val[e] ? val[e]++ : (val[e] = 1);
    });
  return val;
};
const count = (req: shareInterface, res: Response, next: NextFunction) => {
  req.data = counter(req.body.value);
  next();
};
export = count;
