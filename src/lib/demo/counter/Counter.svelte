<script>
  let count = 0;

  const increment = () => {
    count++;
  };
</script>

<button class="btn btn-primary" on:click={increment}>Nombre de clics : {count}</button>
