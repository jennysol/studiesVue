<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>
<script>
import FrutasMixins from './FrutasMixins'
export default {
	mixins: [FrutasMixins],
}
</script>

<style>

</style>