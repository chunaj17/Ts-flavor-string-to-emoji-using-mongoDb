export function getRegEx(item: string) {
  let pattern = new RegExp(item, "g");
  return pattern;
}
