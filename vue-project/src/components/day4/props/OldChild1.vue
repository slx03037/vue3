<template>
  <div class="card">
    <h3>用户名：{{ name }}</h3>
    <p>年龄：{{ age }}</p>
    <p>是否VIP:{{ isVip ? '是' : '否' }}</p>
  </div>
</template>

<script setup>
// 直接声明props数组
const props = defineProps(['name', 'age', 'isVip'])
console.log(props.name) // js中取值
</script>