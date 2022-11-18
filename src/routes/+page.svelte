<script>
  import { HighlightSvelte } from "svelte-highlight";
  export let data;
</script>

<h1>Hello</h1>
<HighlightSvelte code={data.code} />
