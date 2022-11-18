import readComponent from "$lib/node/readComponent";

export const load = () => {
  return {
    counterCode: readComponent("Counter")
  }
}
