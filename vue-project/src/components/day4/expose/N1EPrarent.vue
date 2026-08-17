<template>
    <N1Child ref="childRef"></N1Child>
    <button @click="callChildMethod">调用子组件increment方法</button>
    <button @click="callChildResetMethod">调用子组件reset方法</button>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import N1Child from './N1EChild.vue';


//获取子组件实例，需要定义类型
const childRef=ref<InstanceType <typeof N1Child> | null>(null);

function callChildMethod(){
    childRef.value?.increment();//注意不要写错 childRef.value?.increment;方法写成调用属性
    console.log(childRef.value?.count);
}    

function callChildResetMethod(){
    childRef.value?.reset();//注意不要写错 childRef.value?.reset;方法写成调用属性
    console.log(childRef.value?.count);
} 

</script>