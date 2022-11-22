<style lang="scss" global>
  @use "src/lib/scss/all";

  .loadingScreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
</style>

<script>
  import { navigating } from '$app/stores';
  import { fade } from 'svelte/transition';
</script>

{#if $navigating}
  <div class="loadingScreen" transition:fade>
    <p>Chargement...</p>
  </div>
{/if}

<slot />
