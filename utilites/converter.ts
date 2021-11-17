import { arrInterface, keyValue } from "../interfaces/interface";
import { getRegEx } from "./getRegEx";
import emoji from "node-emoji";
export const converter = (dataInputed: string, sortResult: arrInterface[]) => {
  const element1 = sortResult[sortResult.length - 1].key;
  const element2 = sortResult[sortResult.length - 2].key;
  const element3 = sortResult[sortResult.length - 3].key;
  const convertedResult = dataInputed
    .replace(getRegEx(element1), emoji.get("sunglasses"))
    .replace(getRegEx(element2), emoji.get("smile"))
    .replace(getRegEx(element3), emoji.get("sweat"));
  return convertedResult;
};
