import { Request } from "express";
import { ValidationChain } from "express-validator";
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
type user = {
  [key: string]: ValidationChain[];
};
export { arrInterface, keyValue, user };
