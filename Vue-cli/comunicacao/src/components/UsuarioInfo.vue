<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usúario: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário:<strong>{{ idade }}</strong></p>
        <button @click="reinicializarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true,
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: Number,
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reinicializarNome(){
            const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudoou', { //Comunicação filho com componente pai // PAi para filho por props 
                novo: this.nome,
                antigo
            })
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
