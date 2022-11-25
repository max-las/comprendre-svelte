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

<script>
  import siteData from "$lib/site-data.json";
</script>

<nav class="navbar navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/icons/svelte.svg" alt="svelte icon">
      <span>{ siteData.title }</span>
    </a>
  </div>
</nav>

<div class="container">
  <slot />
</div>
