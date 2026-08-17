<template>
    <!-- 绑定ref标识 --->
    <N2Child ref="childRef" v-model="dataMsg"></N2Child>
    <button @click="sayHello">调用子组件方法</button>
    <p>挂在数据:{{ dataMsg }}</p>
    
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import N2Child from './N2Child.vue';

const dataMsg=ref<string>();    

//关键：通过InstanceType获取子组件实例类型
const  childRef = ref<InstanceType<typeof N2Child>|null>(null);



onMounted(()=>{
    //if(childRef.value == null) {console.log("子组件实例为空")};
    // 组件挂载后可调用子组件属性/方法
   console.log("挂在的示例:",childRef.value?.modelValues);
   //data.value=childRef.value?.modelValue
})

const sayHello = ()=>{
    
    childRef.value?.sendMsg();
    //data.value=childRef.value?.modelValue
}

</script>