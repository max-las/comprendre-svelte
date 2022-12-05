import { readFileSync } from "node:fs";

const readLibFile = (ref: string) => {
  return readFileSync(`src/lib/${ref}`, "utf8");
}

export { readLibFile };
