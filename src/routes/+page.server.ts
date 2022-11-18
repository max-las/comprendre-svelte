import { readFileSync } from "node:fs";

export function load() {
  const code = readFileSync("src/routes/+page.svelte", "utf8");
  return {
    code: code
  };
}
