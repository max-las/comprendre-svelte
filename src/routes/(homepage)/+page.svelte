<style lang="scss">
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    $border: 0.8rem solid #FF3E00;
    border-top: $border;
    border-bottom: $border;

    & > div {
      text-align: center;

      img {
        height: 8rem;
        margin-bottom: 1rem;
      }
    }
  }
</style>

<svelte:head>
	<title>Comprendre Svelte</title>
</svelte:head>

<main>
  <div>
    <img src="icons/svelte.svg" alt="svelte icon">

    <h1>Comprendre Svelte</h1>

    <p>
      Petit guide touristique de la technologie <a href="https://svelte.dev/">Svelte</a>,
      par <a href="https://maximelasserre.com">Maxime Lasserre</a>.
    </p>
    
    <a class="btn btn-primary" href="/begin">Commencer <i class="bi bi-chevron-right"></a>
  </div>
</main>
