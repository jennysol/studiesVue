<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <router-view />
        <button sucesso @click="goStart">Voltar</button>
    </div>
</template>

<script>
export default {
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