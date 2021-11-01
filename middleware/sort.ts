import { Request, Response, NextFunction } from "express";
import { arrInterface, shareInterface } from "../interfaces/interface";
const sort = (obj: Object) => {
  var arr: arrInterface[] = [];
  Object.entries(obj).forEach((value) => {
    arr.push({
      key: value[0],
      value: value[1],
    });
    arr.sort(function (a, b): number {
      return a.value - b.value;
    });
  });
  //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
  return arr; // returns array
};

const dataSort = (req: shareInterface, res: Response, next: NextFunction) => {
  req.sorter = sort(req.data);
  next();
};
export = dataSort;
