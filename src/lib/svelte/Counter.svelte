<script>
  let count = 0;

  const increment = () => {
    count++;
  };
</script>

<button on:click={increment}>Count: {count}</button>
