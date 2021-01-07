<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpfDoAluno | cpf | inverter }}</p>
		<input type="text" :value="cpfDoAluno | cpf">
		<hr>
		<Frutas/>
		<hr>
		 <div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
    	</div>
	</div>
</template>

<script>
import Frutas from './Frutas'
import FrutasMixins from './FrutasMixins'
import usuarioMixins from './usuarioMixins'

export default {
	components: { Frutas },
	mixins: [FrutasMixins, usuarioMixins],
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
			frutas: ['laranja'], //Oque está dentro do data() do component tem prioridade
		}
	},
	 created() {
        console.log('Created - App!')
    },
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
