<template>
  <div class="good">
    <img :src="img" alt="">
    <h4>{{ title }}</h4>
    <p>价格：{{ price }}元</p>
    <p v-if="stock > 0">库存：{{ stock }}件</p>
    <p v-else>已售罄</p>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true
  },
  title: String,
  price: Number,
  stock: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.good {
  border: 1px solid #eee;
  padding: 10px;
  width: 200px;
}
img {
  width: 100%;
}
</style>