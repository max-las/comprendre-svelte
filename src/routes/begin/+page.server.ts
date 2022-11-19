import { readComponent } from "$lib/ts/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    counterCode: readComponent("Counter")
  }
}
