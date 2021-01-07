<template>
    <div>
        <h1>{{ global }}</h1>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>
<script>
import FrutasMixins from './FrutasMixins'
import usuarioMixins from './usuarioMixins'

export default {
    mixins: [FrutasMixins, usuarioMixins],
    created() {
        console.log('Created - Frutas!')
    },
}
</script>

<style>

</style>