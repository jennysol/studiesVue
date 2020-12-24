<template>
	<div id="app">
		<!-- Multiplos Componentes -->
		<span>
			<button @click="componente = 'Citacoes'">Citações</button>
			<button @click="componente = 'Sobre'">Sobre</button>
		</span>
		<!-- O componente não será mais destruido e criado -->
		<keep-alive>
			<component :is="componente"></component>
		</keep-alive>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			componente: 'Sobre'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 35px;
		border: none;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(179, 207, 214, 0.5);
    }
</style>