<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
</template> -->


<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<style scoped>
.hello {
  color: #42b883;
}
</style> -->

<template>
    <div class="app-container">
        <h1>First Vue 3 + TypeScript + Vite</h1>
          <!-- 嵌套子组件（后面会讲，这里先放个占位） -->
         <slot></slot>
         <!-- 导入并使用Count组件（直接写组件名即可） -->
        <count />
        <!-- <HelloWorld /> -->
    </div>
</template>

<script setup lang="ts">

  // setup语法糖，Vue3推荐写法，不用写export default
  // 这里可以导入子组件、声明数据、定义方法，带TS类型约束

  //示例：声明一个全局标题（带TS类型）
  const appTitle :string="Vue 3 + TypeScript + Vite";
  
  //示例：定义一个方法（带TS类型）
  const showTitle=()=>{return appTitle;}

  import count from '@/components/Count.vue';
  //import HelloWorld from './components/HelloWorld.vue';
</script>

<style scoped>
  /* scoped表示样式只作用于当前组件，不会污染其他组件 */
  .app-container {
    text-align: center;
    padding: 20px;
    font-size: 18px;
  }
  h1 {
    color: #42b983; /* Vue官方绿色 */
  }
</style>