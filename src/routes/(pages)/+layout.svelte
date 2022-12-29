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

  .navbar-nav:last-child {
    margin-left: auto;
  }

  .hide {
    display: none;
  }
</style>

<script lang="ts">
  import siteData from "$lib/site-data.json";
  import { onMount } from "svelte";

  let showDropdown = false;
  let showNavbar = true;
  let navbarToggler: HTMLElement;

  const updateNavbar = () => {
    showNavbar = !navbarToggler.offsetParent;
  };

  const toggleNavbar = () => {
    showNavbar = !showNavbar;
  };

  onMount(updateNavbar)
</script>

<svelte:window on:resize={updateNavbar} />

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/icons/svelte.svg" alt="svelte icon">
      <span>{ siteData.title }</span>
    </a>

    <button
      class="navbar-toggler"
      type="button"
      bind:this={navbarToggler}
      on:click={toggleNavbar}>
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" class:hide={!showNavbar}>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            on:click={() => { showDropdown = !showDropdown; }}
            href="#"
            role="button">
            Caractéristiques
          </a>
          <ul class="dropdown-menu" class:show={showDropdown}>
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
        <li class="nav-item">
          <a class="nav-link" href="/try-svelte">Essayer Svelte</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/max-las/comprendre-svelte">
              <i class="bi bi-github"></i> GitHub
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main class="container">
  <slot />
</main>
