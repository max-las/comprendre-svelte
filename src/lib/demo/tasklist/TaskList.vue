<style scoped>
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
export default {
  data() {
    return {
      taskList: [],
      lastId: 0,
      text: ""
    }
  },
  methods: {
    addTask() {
      this.taskList.push({ text: this.text, id: ++this.lastId });
      this.text = "";
    },
    removeTask(id) {
      const index = this.taskList.findIndex(task => task.id === id);
      this.taskList.splice(index, 1);
    }
  }
}
</script>

<template>
  <div class="content">
    <div v-for="task in taskList" class="task d-flex justify-content-between shadow-sm rounded p-2 mb-2">
      {{ task.text }}
      <i class="bi bi-trash" @click="() => removeTask(task.id)"></i>
    </div>

    <form @submit.prevent="addTask" class="d-flex align-items-center">
      <input type="text" v-model="text" class="form-control">
      <button type="submit" class="btn btn-primary ms-2">Ajouter</button>
    </form>
  </div>
</template>
