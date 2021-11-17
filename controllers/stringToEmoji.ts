import { Request, Response, NextFunction } from "express";
import counter from "../utilites/count";
import { sorter } from "../utilites/sort";
import { converter } from "../utilites/converter";
const stringToEmoji = (req: Request, res: Response) => {
  const dataInputed: string = req.body.value;
  const countResult = counter(dataInputed);
  const sortResult = sorter(countResult);
  const convertedResult = converter(dataInputed, sortResult);
  res.status(200).json({
    stringEntered: dataInputed,
    stringConvertedToEmoji: convertedResult,
  });
};
export = stringToEmoji;
