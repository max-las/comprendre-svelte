import { readFileSync } from "node:fs";

const readDemoComponent = (ref: string) => {
  return readFileSync(`src/lib/svelte/demo/${ref}.svelte`, "utf8");
}

export { readDemoComponent };
