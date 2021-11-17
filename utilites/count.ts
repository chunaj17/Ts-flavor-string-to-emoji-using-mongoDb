import { keyValue } from "../interfaces/interface";
const counter = (data: string) => {
  const count: keyValue = {};
  data
    .replace(/\s/g, "")
    .split("")
    .forEach((e) => {
      count[e] ? (count[e] += 1) : (count[e] = 1);
    });
  return count;
};
export = counter;
