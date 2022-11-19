import { readFileSync } from "node:fs";

const readComponent = (ref: string) => {
  return readFileSync(`src/lib/svelte/${ref}.svelte`, "utf8");
}

export { readComponent };
