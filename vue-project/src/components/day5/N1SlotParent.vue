<template>
    <card>
        <div v-if="!disable">
        <p>这是插入卡片的自定义内容</p>
        </div>
    </card>
        <button @click="click">按钮</button>
</template>

<script setup lang="ts">
    import card from './N1SlotChild.vue';
    import { ref } from 'vue';
    const disable = ref(false);
    const click = () => {
        disable.value = !disable.value;
    }

</script>