<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usúario: <strong>{{ inverterNome() }}</strong></p>
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
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reinicializarNome(){
            const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudoou', {
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
