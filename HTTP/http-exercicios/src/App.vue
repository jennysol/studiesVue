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
			<b-button
				@click="getUsers"
				size="lg"
				variant="success"
				class="ml-2"
			>
				Trazer dados
			</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(user, id) in users" :key="id">
				<strong>Nome:</strong> {{ user.name }} <br/>
				<strong>Email:</strong> {{ user.email }}<br/>
				<strong>Id:</strong> {{ id }}<br/>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			user : {
				name: '',
				email:'',
			}
		}
	},
	mounted(){
		this.getUsers();
	},
	methods: {
		save() {
			this.$http.post('user.json', this.user)
				.then(resp => {
					this.user.name = '',
					this.user.email = ''
				})
		},
		getUsers() {
			this.$http.get('user.json')
				.then(response => {
					this.users = response.data
					console.log(response.data)
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
