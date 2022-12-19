import { highlightLibFiles } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    highlighted: await highlightLibFiles([
      { libPath: "demo/counter/CounterVanilla.html", lang: "html" },
      { libPath: "demo/counter/Counter.svelte", lang: "svelte" },
    ])
  };
}
