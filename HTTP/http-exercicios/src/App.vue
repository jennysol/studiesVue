<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input 
					type="text" 
					size="lg" 
					v-model="user.name"
					placeholder="Infome o Nome"
				>
				</b-form-input>
			</b-form-group>

			<b-form-group label="Email:">
				<b-form-input 
					type="text" 
					size="lg" 
					v-model="user.email"
					placeholder="Informe o Email"
				>
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button
				@click="save"
				size="lg"
				variant="primary"
			>
				Salvar
			</b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user : {
				name: '',
				email:'',
			}
		}
	},
	methods: {
		save() {
			this.$http.post('user.json', this.user)
				.then(resp => {
					this.user.name = '',
					this.user.email = ''
				})
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		name: 'Jennifer',
	// 		email: 'jennyssol@gmail.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
