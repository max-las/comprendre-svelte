import { highlightLibFiles } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    highlighted: await highlightLibFiles([
      { libPath: "demo/get-started.sh", lang: "sh" }
    ])
  };
}
