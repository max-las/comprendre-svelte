<style>
  .content {
    max-width: 400px;
  }

  .task {
    background-color: lightyellow;
  }

  .bi-trash {
    cursor: pointer;
  }
</style>

<script>
  let taskList = [];
  let lastId = 0;
  let text = '';

  const addTask = () => {
    taskList = [...taskList, { text, id: ++lastId }];
    text = '';
  };

  const removeTask = (id) => {
    taskList = taskList.filter((task) => task.id !== id);
  };
</script>

<div class="content">
  {#each taskList as task}
    <div class="task d-flex justify-content-between shadow-sm rounded p-2 mb-2">
      {task.text}
      <i class="bi bi-trash" on:click={() => removeTask(task.id)}></i>
    </div>
  {/each}

  <form on:submit|preventDefault={addTask} class="d-flex align-items-center">
    <input type="text" bind:value={text} class="form-control">
    <button type="submit" class="btn btn-primary ms-2">Ajouter</button>
  </form>
</div>

