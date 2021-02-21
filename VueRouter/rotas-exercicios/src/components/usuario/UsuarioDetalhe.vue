<template >
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
        <router-link tag="button" primario :to="`/usuario/${id}/editar`">
        <!--:to="`/usuario/${$route.params.id}/editar`"  Uma forma de interpolar o id -->
            Editar
        </router-link>
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
}
</script>

<style>

</style>