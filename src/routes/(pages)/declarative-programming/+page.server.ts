import { readLibFile } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    buttonHtml: readLibFile("demo/counter/button.html"),
    counterJs: readLibFile("demo/counter/counter.js")
  }
}
