<template> 
    <P>计数:{{ count }}</P>
    <p>计数2:{{ doubleCount  }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(10)

// TS自动推导返回值为number类型
const doubleCount = computed(() => {
    return count.value * 2
})

</script>