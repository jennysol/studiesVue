<template>
  <div class="task" :class="stateClass">
      <p>{{ task.name }}</p>
  </div>
</template>
<script>
export default {
  props: {
      task: { type: Object, required: true }
  },
  computed: {
      stateClass() {
          return {
              pending: this.task.pending,
              done: !this.task.pending
          }
      }
  }
}
</script>
<style>
  .task {
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pending {
    border-left: 12px solid rgb(78, 68, 9);
    background-color: rgb(88, 78, 17);
  }

  .done {
    color: rgb(182, 180, 173);
    border-left: 12px solid rgb(34, 51, 34);
    background-color: rgb(33, 54, 33);
    text-decoration: line-through;
  }
</style>