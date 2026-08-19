<template>
    <div ref="el">
        <h1>onMounted</h1>
        <p>{{ el }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted} from 'vue';

const el = ref<string>()


onMounted(() => {
    console.log('组件已挂载')
})

</script>