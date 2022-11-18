<script>
  import { HighlightSvelte } from "svelte-highlight";
  import Counter from "$lib/svelte/Counter.svelte";
  
  export let data;
</script>

<h1>Hello</h1>
<HighlightSvelte code={data.counterCode} />
<Counter />
