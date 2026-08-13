
<template>
  <div>
    <p>昵称：{{ name }}</p>
    <button @click="sayHello">点击打招呼</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '张三'
    }
  },
  methods: {
    sayHello() {
      alert('你好，' + this.name)
    }
  }
}
</script>