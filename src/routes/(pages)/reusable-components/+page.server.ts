import { readLibFile } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    DogCat: readLibFile("demo/dogcat/DogCat.svelte"),
    DogCatFrame: readLibFile("demo/dogcat/DogCatFrame.svelte")
  }
}
