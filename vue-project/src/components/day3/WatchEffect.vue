<template>
  <div>
    <h1>Watch Effect</h1>
    <input type="text" v-model="name" />
    <p>姓名: {{ name }}</p>
     <input type="text" v-model="count" />
    <p>计数:{{ count }}</p>
  </div>
</template>

<script setup lang="ts">    
import { ref, watchEffect } from "vue";

const name = ref("");
const count = ref(0);

watchEffect(() => {
  console.log(`watchEffect ${name.value}  ${count.value}`);
})
</script>