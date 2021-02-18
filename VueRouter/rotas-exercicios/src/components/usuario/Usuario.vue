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
  data() {
    return {
      id: this.$route.params.id
    }
  },
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