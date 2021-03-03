export default {
    state: {
        quantidade: 5,
        preco: 6
    },
   
    mutations : {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
}