<script lang="ts">
  import { HighlightSvelte } from "svelte-highlight";
  import Counter from "$lib/svelte/Counter.svelte";
  import type { PageData } from "./$types";
  
  export let data: PageData;
</script>

<h1>Hello</h1>
<HighlightSvelte code={data.counterCode} />
<Counter />
