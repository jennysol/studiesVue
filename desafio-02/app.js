new Vue({
	el: '#desafio',
	data: {
			valor: ''
	},
	methods: {
		alert(){
				alert('Estou alertando agora!')
		}
	},
	alterarValor(event) {
		this.valor = event.target.value
	}
})