<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpfDoAluno | cpf | inverter }}</p>
		<input type="text" :value="cpfDoAluno | cpf">
	</div>
</template>

<script>
export default {
	filters: {
		cpf(valor) {
			const arr = valor.split('') //Adicionando um array para cada posição
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('') //Retornando array como string
		}
	},
	data() {
		return {
			cpfDoAluno: '60070080090',
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 2.5rem;
}
</style>
