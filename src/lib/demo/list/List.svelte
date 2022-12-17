<style>
  .content {
    max-width: 400px;
  }

  .task {
    display: flex;
    justify-content: space-between;
  }

  form {
    display: flex;
    align-items: center;
  }

  button {
    margin-left: 8px;
  }
</style>

<script>
  let taskList = [];
  let lastId = 0;
  let text = '';

  const addTask = () => {
    taskList = [...taskList, { text, id: ++lastId }];
    text = '';
    console.log(taskList);
  };

  const removeTask = (id) => {
    taskList = taskList.filter((task) => task.id !== id);
  }
</script>

<div class="content">
  {#each taskList as task}
    <div class="task shadow-sm">
      {task.text}
      <i class="bi bi-trash" on:click={() => removeTask(task.id)}></i>
    </div>
  {/each}

  <form on:submit|preventDefault={addTask}>
    <input class="form-control" type="text" bind:value={text}>
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </form>
</div>

