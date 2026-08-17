<template>
    <div>
        <h1>Parent Component</h1>
        <m3Child v-model="message"/>
    </div>
</template>

<script setup lang="ts">
    import m3Child from './M3Child.vue';

    import { ref } from 'vue';

    const message = ref('Hello from Parent');

</script>