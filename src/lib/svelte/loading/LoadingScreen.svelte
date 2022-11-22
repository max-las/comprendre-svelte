<style lang="scss">
  div {
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
  import { fade } from 'svelte/transition';
  import LoadingIcon from '$lib/svelte/loading/LoadingIcon.svelte';
</script>

<div transition:fade>
  <LoadingIcon />
</div>
