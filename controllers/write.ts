import datas from '../models/modelEmoji'
import { Request, Response } from 'express'
import * as emoji from 'node-emoji'
import { emoji as emojiList } from '../utilites/emoji'
import { getRegEx } from '../utilites/getRegEx'
import { dbInterface } from '../interfaces/interface'
const createData = async (req: Request, res: Response) => {
  const { id: dataID } = req.body
  const dataDb = await datas.findOne({ id: dataID }, { _id: 0, __v: 0 })
  const toDB: object = await datas.create(req.body)
  res.status(200).json({ msg: `data successfully written`, data: `${toDB}` })
}
const writeDummy = async (req: Request, res: Response) => {
  const time = new Date()
  const { id: dataID, request: requestVal } = req.body
  let result: string = requestVal
  let dataDb = await datas.findOne({ id: dataID })
  if (dataDb) {
    const dbChar = dataDb.character
    if (dbChar !== undefined) {
      for (let i = 0; i < dbChar.length; i++) {
        result = result.replace(
          getRegEx(dbChar[i]),
          emoji.get(emojiList[dbChar[i]].toLowerCase())
        )
      }
      const dataRequested: object = {
        [`${time}`]: {
          id: `${dataID}`,
          request: requestVal,
          result: result,
        },
      }
      const dataToBeSaved: object = { ...dataDb['requests'], ...dataRequested }

      if ('requests' in dataDb) {
        await datas.findOneAndUpdate(
          { id: dataID },
          { requests: dataToBeSaved }
        )
      } else {
        await datas.findOneAndUpdate(
          { id: dataID },
          { requests: dataRequested }
        )
      }
      res.status(200).json({
        msg: `data successfully converted and saved to the DataBase`,
        data: `${result}`,
      })
    } else {
      console.error('character undefined')
    }
  }
}
const getId = async (req: Request, res: Response) => {
  const { id: dataID } = req.params
  const dataDb = await datas.findOne({ id: dataID })
  res.status(200).json({
    msg: `data u were looking for is found`,
    data: `${dataDb}`,
  })
}
const delId = async (req: Request, res: Response) => {
  const { id: dataID } = req.params
  const dataDb = await datas.findOneAndDelete({ id: dataID })
  res.status(200).json({
    msg: `data u were looking for is found and deleted`,
    data: `${dataDb}`,
  })
}

export { createData, writeDummy, getId, delId }
