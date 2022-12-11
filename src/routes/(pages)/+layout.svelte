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
  
  let container: Element;
  let containerComputedStyle: CSSStyleDeclaration;

  let windowWidth: number = 0;
  let documentWidth: number = 0;
  let containerWidth: number = 0;

  const containerPaddingX = () => parseFloat(containerComputedStyle?.paddingLeft) || 0;

  onMount(() => {
		containerComputedStyle = getComputedStyle(container);
	});

  $: {
    windowWidth;
    documentWidth = document.documentElement.clientWidth;
  }

  $: {
    $containerSideWidth = ((documentWidth - containerWidth) / 2) + containerPaddingX();
  }
</script>

<svelte:window bind:innerWidth={windowWidth}/>

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
