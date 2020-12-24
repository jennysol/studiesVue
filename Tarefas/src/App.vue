<template>
	<div id="app">
		<h1>Tarefas</h1>
    <!-- Representar tasks em Data para outro componente -->
    <TaskGrid :tasks="tasks" /> 
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'

export default {
  components: { TaskGrid},

	data() {
		return {
      tasks: [
        { name: 'Lavar a louça', pending: false },
        { name: 'Comprar blusa', pending: true },
      ]
		}
	}

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(14, 13, 13), rgb(53, 16, 7));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
