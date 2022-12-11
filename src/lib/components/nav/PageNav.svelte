<style lang="scss">
  $padding-base: 1rem;
  $btn-margin-top: 5px;

  .content {
    background-color: #E5EDF3;
    padding-top: calc($padding-base - $btn-margin-top);
    padding-bottom: $padding-base;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100vw;
  }

  .btn {
    margin-top: $btn-margin-top;
  }
</style>

<script lang="ts">
  type linkData = {
    url: string,
    text: string
  };

  import { containerSideWidth } from '$lib/stores';

  export let before: linkData | null = null, after: linkData | null = null;

  let height: number = 0;
</script>

<div class="ghost" style="height: {height}px;"></div>

<div class="content" bind:offsetHeight={height} style="padding-left: {$containerSideWidth}px;">
  {#if before}
    <a class="btn btn-secondary" href="{before.url}">
      <i class="bi bi-chevron-left"></i> {before.text}
    </a>
  {/if}

  {#if after}
    <a class="btn btn-primary" href="{after.url}">
      {after.text} <i class="bi bi-chevron-right"></i>
    </a>
  {/if}
</div>
