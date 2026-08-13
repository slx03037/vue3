<template> 
    <P>计数:{{ count }}</P>
    <p>计数2:{{ doubleCount  }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const count = ref(5)
console.log(count.value);
const doubleCount = computed<number>({
    get(){ return count.value * 2 },
    // 监听修改，反向更新原数据
    set(v){ count.value = v / 2 }
})
// 可直接修改，触发set逻辑
doubleCount.value=20;
console.log(count.value);// 10
</script>