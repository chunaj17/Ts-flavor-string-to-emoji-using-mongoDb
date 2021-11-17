import { arrInterface, keyValue } from "../interfaces/interface";

export const sorter = (data: keyValue) => {
  const arr: arrInterface[] = [];
  Object.entries(data).forEach((value) => {
    arr.push({
      key: value[0],
      value: value[1],
    });
  });
  arr.sort((a, b): number => {
    return a.value - b.value;
  });
  return arr;
};
