import { Request } from "express";
import { ValidationChain } from "express-validator";
interface arrInterface {
  key: string;
  value: number;
}
type keyValue = {
  [key: string]: number;
};
type user = {
  [key: string]: ValidationChain[];
};
export { arrInterface, keyValue, user };
