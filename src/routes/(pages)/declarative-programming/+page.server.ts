import { readLibFile } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    CounterVanillaHtml: readLibFile("demo/counter/CounterVanilla.html"),
    CounterSvelte: readLibFile("demo/counter/Counter.svelte")
  }
}
