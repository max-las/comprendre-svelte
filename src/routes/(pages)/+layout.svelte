<style lang="scss">
  nav {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1em;
  }

  .navbar-brand {
    img {
      height: 24px;
    }

    & > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>

<script lang="ts">
  import siteData from "$lib/site-data.json";
  import { containerSideWidth } from '$lib/stores';
  import { onMount } from 'svelte';
  
  let container: HTMLElement;
  let containerWidth: number;
  let containerComputedStyle: CSSStyleDeclaration;
  let documentWidth: number;

  const setDocumentWidth = (entries: ResizeObserverEntry[]) => {
    documentWidth = entries[0].contentBoxSize[0].inlineSize;
  }

  $: {
    if (containerComputedStyle) {
      const containerPaddingLeft = parseFloat(containerComputedStyle.paddingLeft);
      $containerSideWidth = ((documentWidth - containerWidth) / 2) + containerPaddingLeft;
    }
  }

  onMount(() => {
    documentWidth = document.documentElement.clientWidth;
    const documentObserver = new ResizeObserver(setDocumentWidth);
    documentObserver.observe(document.documentElement);
		containerComputedStyle = getComputedStyle(container);
	});
</script>

<nav class="navbar navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/icons/svelte.svg" alt="svelte icon">
      <span>{ siteData.title }</span>
    </a>
  </div>
</nav>

<div class="container" bind:this={container} bind:offsetWidth={containerWidth}>
  <slot />
</div>
