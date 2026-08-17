<template>
   
   <p>计数:{{ count }}</p>

    <!--简写 @，绑定点击、输入等事件，可精准约束事件参数类型，杜绝参数错乱。 -->
    <button @click="increment">++</button>
     <!--绑定事件，可精准约束事件参数类型，杜绝参数错乱。 -->
    <button v-on:click="minus">--</button>
    <button @v-on="reset">重置</button>
</template>    
<script setup lang="ts">
 import { ref } from 'vue';

    const count = ref(0);
    const increment = () => {
        count.value++;
    }
    const minus = () => {
        count.value--;
    }
    const reset = () => {
        count.value = 0;
    }
</script>