import { readDemoComponent } from "$lib/ts/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    counterCode: readDemoComponent("Counter")
  }
}
