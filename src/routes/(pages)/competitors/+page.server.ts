import { readLibFile } from "$lib/server/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    TaskListSvelte: readLibFile("demo/tasklist/TaskList.svelte"),
    TaskListReact: readLibFile("demo/tasklist/TaskList.react.js"),
    TaskListVue: readLibFile("demo/tasklist/TaskList.vue")
  }
}
