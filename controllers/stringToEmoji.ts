import { Request, Response, NextFunction } from "express";
import * as emojis from "node-emoji";
import { emoji } from "./emoji";
import { shareInterface } from "../interfaces/interface";
const emojiToString = (req: shareInterface, res: Response) => {
  const { value } = req.body;
  const sorted = req.sorter;
  const char1 = sorted[sorted.length - 1].key;
  const char2 = sorted[sorted.length - 2].key;
  const char3 = sorted[sorted.length - 3].key;
  let text = "";
  text = value
    .replace(getRegEx(char1), emojis.get("smile"))
    .replace(getRegEx(char2), emojis.get("sunglasses"))
    .replace(getRegEx(char3), emojis.get("yum"));
  res.status(200).json({
    msg: "string converted successfully",
    dataInputed: `${value}`,
    dataConverted: `${text}`,
  });
};
export = emojiToString;
function getRegEx(item: string) {
  let pattern = new RegExp(item, "g");
  return pattern;
}
