<template>
  <div>
    <h2>父组件</h2>
    <!-- 1. 静态字符串传值 -->
    <account-form name="张三" />

    <!-- 2. 动态绑定（v-bind / :）传变量、数字、布尔、对象 -->
    <account-form
      :id="userId"
      :age="25"
      :is-vip="vipFlag"
      :info="userInfo"
      :list="userList"
    />
  </div>
</template>

<script setup>
import AccountForm from './OldChild.vue'
// 父组件数据
const userId = '1001'
const vipFlag = false
const userInfo = { hobby: '打球' }
const userList = ['前端', '后端']
</script>