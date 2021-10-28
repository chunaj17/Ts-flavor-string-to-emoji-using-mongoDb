import datas from "../models/modelEmoji";
import { Request, Response, NextFunction } from "express";
import * as emoji from "node-emoji";
import emojiList from "./emoji";

const createData = async (req: Request, res: Response, next: NextFunction) => {
  const { id: dataID } = req.body;
  const dataDb = await datas.findOne({ id: dataID }, { _id: 0, __v: 0 });
  if (dataDb) {
    res
      .status(200)
      .json({
        msg: `data by id ${dataID} already avaliable`,
        data: `${dataDb}`,
      });
  } else {
    const toDB: object = await datas.create(req.body);
    res.status(200).json({ msg: `data successfully written`, data: `${toDB}` });
  }
};
const writeDummy = async (req: Request, res: Response, next: NextFunction) => {
  const time = new Date();
  const { id: dataID, request: requestVal } = req.body;
  const dataDb = await datas.findOne({ id: dataID });
  let result: string = requestVal;
  if (dataDb) {
    const dbChar = dataDb.character;
    if (dbChar !== undefined) {
      for (let i = 0; i < dbChar.length; i++) {
        result = result.replace(
          getRegEx(dbChar[i]),
          emoji.get(emojiList[dbChar[i]].toLowerCase())
        );
      }
      const dataRequested: object = {
        [`${time}`]: {
          id: `${dataID}`,
          request: requestVal,
          result: result,
        },
      };
      const dataToBeSaved: object = { ...dataDb["requests"], ...dataRequested };

      if ("requests" in dataDb) {
        await datas.findOneAndUpdate(
          { id: dataID },
          { requests: dataToBeSaved }
        );
      } else {
        await datas.findOneAndUpdate(
          { id: dataID },
          { requests: dataRequested }
        );
      }
      res.status(200).json({
        msg: `data successfully converted and saved to the DataBase`,
        data: `${result}`,
      });
    } else {
      console.error("character undefined");
    }
  } else {
    res.status(404).json({ msg: `data by the id:${dataID} not found` });
  }
};
const getId = async (req: Request, res: Response, next: NextFunction) => {
  const { id: dataID } = req.params
  const dataDb = await datas.findOne({ id: dataID })
  if (dataDb) {
    res.status(200).json({
      msg: `data u were looking for is found`,
    data:`${dataDb}`})
  } else {
    res.status(404).json({
      msg: `data u were looking for by the id : ${dataID} is not found`,
    })
  }

}
const delId = async (req: Request, res: Response, next: NextFunction) => {
  const { id: dataID } = req.params
  const dataDb = await datas.findOneAndDelete({ id: dataID })
  if (dataDb) {
    res.status(200).json({
      msg: `data u were looking for is found and deleted`,
    data:`${dataDb}`})
  } else {
    res.status(404).json({
      msg: `data u were looking for by the id : ${dataID} is not found then nothing to delete`,
    })
  }

}

export { createData, writeDummy,getId,delId };
function getRegEx(item: string) {
  let pattern = new RegExp(item, "g");
  return pattern;
}
