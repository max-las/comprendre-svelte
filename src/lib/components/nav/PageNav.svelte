<script lang="ts">
  type linkData = {
    url: string,
    text: string
  };

  export let before: linkData | null = null, after: linkData | null = null;
</script>

<div class="block">
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
