import { readLibFile } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    counterCode: readLibFile("demo/counter/Counter.svelte")
  }
}
