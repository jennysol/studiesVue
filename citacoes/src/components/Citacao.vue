<template>
  <div class="citacao">
      <slot name="autor"></slot>
      <slot name="texto"></slot>
      <div class="fonte"><slot name="fonte"></slot></div>
  </div>
</template>

<script>
export default {
  props: ['texto']
}
</script>

<style scoped>
  .citacao {
      border: 1px solid #DDD;
      background-color: rgba(0, 0, 0, .1);
      padding: 25px;

  }
  h1 {
      color: rgb(199, 199, 199);
  }

  .fonte {
    float: right;
  }

</style>
