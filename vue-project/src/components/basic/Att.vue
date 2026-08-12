<template>
<!--Attribute 绑定：使用 v-bind: 或简写 : 绑定属性。-->
  <div>
    <img v-bind:src="imgSrc" alt="Vue logo">
    <img :src="imgSrc" alt="Vue logo">
     <button :disabled="isDisabled">按钮</button>
     <!-- 动态绑定多个属性 -->
  <div v-bind="objectOfAttrs"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imgSrc = ref('https://vuejs.org/images/logo.png')

const isDisabled = ref(true)

const objectOfAttrs = ref({
  id: 'container',
  class: 'wrapper'
})
</script>