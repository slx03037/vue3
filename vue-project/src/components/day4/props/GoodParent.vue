<template>
  <div class="goods-list">
    <GoodCard
      img="https://xxx.jpg"
      title="无线鼠标"
      :price="99"
      :stock="50"
    />
    <GoodCard
      img="https://yyy.jpg"
      title="机械键盘"
      :price="199"
      :stock="0"
    />
  </div>
</template>

<script setup>
import GoodCard from './GoodChild.vue'
</script>