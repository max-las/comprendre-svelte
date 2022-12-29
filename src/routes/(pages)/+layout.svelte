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
</script>

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/icons/svelte.svg" alt="svelte icon">
      <span>{ siteData.title }</span>
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            Caractéristiques
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/what-is-svelte">
              Qu'est-ce que Svelte ?
            </a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/declarative-programming">
              La programmation déclarative
            </a></li>
            <li><a class="dropdown-item" href="/reusable-components">
              Les composants réutilisables
            </a></li>
            <li><a class="dropdown-item" href="/competitors-syntax">
              La syntaxe des concurrents
            </a></li>
            <li><a class="dropdown-item" href="/competitors-performances">
              Les perfomances des concurrents
            </a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main class="container">
  <slot />
</main>
