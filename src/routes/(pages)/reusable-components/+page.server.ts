import { readLibFile } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    DogCatNoLang: readLibFile("demo/dogcat/DogCatNoLang.svelte"),
    DogCat: readLibFile("demo/dogcat/DogCat.svelte")
  }
}
