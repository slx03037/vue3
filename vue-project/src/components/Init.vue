<!-- src/components/Count.vue 计数器组件 -->
<template>
    <div>   
        <h2>计数器组件</h2>
        <!-- 数据绑定：显示count的值 -->
         <p>当前计数:{{ count }}</p>
         <p>当前计数:{{ doubleCount }}</p>
         <!-- 绑定方法：点击按钮触发addCount、subCount -->
        <button @click="addCount(1)">+1</button>
        <button @click="subCount(1)">-1</button>
    </div>

    <basic/>
    <!-- <refs/>
    <day3/>
    <day4/> -->
    <!-- <day5/> -->
     <day6/>
</template>

<script setup lang="ts">
    // 1. 导入Vue3的核心API：ref（声明响应式数据）、computed（计算属性）
    import {ref,computed} from 'vue';
    import basic from '@/components/Day1.vue';
    // import refs from '@/components/Day2.vue';
    // import day3 from '@/components/Day3.vue';
    // import day4 from '@/components/Day4.vue';
    //import day5 from '@/components/Day5.vue';
    import day6 from '@/components/Day6.vue';


    //2.声明响应式数据（带TS类型约束）
    // ref<number>() 表示count是number类型的响应式数据，默认值为0
    const count=ref<number>(0);

    //3.定义方法（带TS类型约束：参数类型、返回值类型）
    // addCount：接收step（number类型），无返回值（void）
    const addCount= (num:number):void=>{
        count.value += num;  // ref声明的数据，需要通过.value访问/修改
    }

    // subCount：接收step（number类型），无返回值（void）
    const subCount= (num:number):void=>{
        if(count.value > 0){
            count.value -= num;  // ref声明的数据，需要通过.value访问/修改
        }
    }

    //4. 定义计算属性（带TS类型约束：返回值是number类型）
    const doubleCount=computed<number>(()=>{
        return count.value * 2;
    })
</script>

<style scoped>
    .count-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    }
    button {
    margin: 0 10px;
    padding: 6px 12px;
    cursor: pointer;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    }
    button:hover {
    background: #359469;
    }
</style>