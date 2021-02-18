<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
        <button sucesso @click="goStart">Voltar</button>
    </div>
</template>

<script>
export default {
  props: ['id'],
  
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // },
  methods: {
      goStart() {
        // this.$router.push('/')
        this.$router.push({ path: '/' })
      }
  }
}
</script>

<style>

</style>