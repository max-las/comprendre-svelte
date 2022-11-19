import { readComponent } from "$lib/ts/node";

export const load = () => {
  return {
    counterCode: readComponent("Counter")
  }
}
