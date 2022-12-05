<style lang="scss" global>
  @use "src/lib/scss/all";
</style>

<script>
  import { navigating } from '$app/stores';
  import LoadingScreen from '$lib/components/loading/LoadingScreen.svelte';
</script>

{#if $navigating}
  <LoadingScreen />
{/if}

<slot />
