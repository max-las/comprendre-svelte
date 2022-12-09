<style>
  div {
    max-width: 300px;
  }

  div img.pet {
    width: 100%;
    margin-bottom: 10px;
  }
</style>

<script>
  let selected = "dog";
</script>

<div>
  {#if selected === "dog"}
    <img class="pet" alt="dog" src="/images/dog.jpg">
  {:else if selected === "cat"}
    <img class="pet" alt="cat" src="/images/cat.jpg">
  {/if}

  <select class="form-select" bind:value={selected}>
    <option value={"dog"}>Chien</option>
    <option value={"cat"}>Chat</option>
  </select>
</div>
