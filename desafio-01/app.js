new Vue({
  el: '#desafio',
    data: {
      nome: 'Jennifer',
      idade: 18,
      image: 'https://avatars1.githubusercontent.com/u/62623621?s=460&u=115fdd10f827f6c61fe9a8bb745688d198726d67&v=4'
    },
  methods: {
    idadeVezes3(){
        return this.idade * 3
    },
    random(){
      return Math.random()
    }
  },
})