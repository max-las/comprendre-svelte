<script lang="ts">
  import type { PageData } from "./$types";
  import { HighlightSvelte } from "svelte-highlight";
  import Counter from "$lib/svelte/Counter.svelte";
  
  export let data: PageData;
</script>

<h1>Exemple</h1>
<HighlightSvelte code={data.counterCode} />
<Counter />
