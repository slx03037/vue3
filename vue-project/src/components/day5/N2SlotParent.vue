<template>
  <N2SlotChild>
    <template #header>
        <h1>Header</h1>
    </template>

    <template #default>
        <p> 主要内容区域 </p>
    </template>

    <template #footer>
        <p>© 2024 版权信息</p>
    </template>
  </N2SlotChild>
 
</template>

<script setup lang="ts">
import N2SlotChild from './N2SlotChild.vue'

</script>