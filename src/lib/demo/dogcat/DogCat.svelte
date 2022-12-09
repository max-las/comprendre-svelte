<style lang="scss">
  div {
    max-width: 300px;

    img {
      &.pet {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
</style>

<script lang="ts">
  let selected: string = "dog";
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

