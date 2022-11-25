import { readDemoComponent } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    counterCode: readDemoComponent("Counter")
  }
}
