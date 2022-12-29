<style lang="scss">
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/woman-gb9bb23399_1920.webp");
    background-position: center;

    & > div {
      text-align: center;

      img {
        height: 8rem;
        margin-bottom: 1rem;
      }
    }
  }
</style>

<script>
  import siteData from "$lib/site-data.json";
</script>

<svelte:head>
	<title>{ siteData.title }</title>
</svelte:head>

<main>
  <div class="container">
    <img src="icons/svelte.svg" alt="svelte icon">

    <h1>{ siteData.title }</h1>

    <p>
      Petit guide touristique de la technologie <a href="https://svelte.dev/">Svelte</a>,
      par <a href="https://maximelasserre.com">Maxime Lasserre</a>.
    </p>
    
    <a class="btn btn-primary" href="/what-is-svelte">Commencer <i class="bi bi-chevron-right"></a>
  </div>
</main>
