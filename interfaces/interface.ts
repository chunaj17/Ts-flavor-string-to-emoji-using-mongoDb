import { Request, Response, NextFunction } from "express";
interface arrInterface {
  key: string;
  value: number;
}
type keyValue = {
  [key: string]: number;
};
interface shareInterface extends Request {
  data: keyValue;
  sorter: arrInterface[];
}

export { arrInterface, keyValue, shareInterface };
