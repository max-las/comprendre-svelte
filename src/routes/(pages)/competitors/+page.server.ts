import { highlightLibFiles } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    highlighted: await highlightLibFiles([
      { libPath: "demo/tasklist/TaskList.svelte", lang: "svelte" },
      { libPath: "demo/tasklist/TaskList.react.js", lang: "jsx" },
      { libPath: "demo/tasklist/TaskList.vue", lang: "vue" }
    ])
  };
}
