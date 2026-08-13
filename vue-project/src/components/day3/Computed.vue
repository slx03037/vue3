<template>  
    <p> 全名：{{ fullName }}</p>
    <p> 全名2: {{ fullName2 }}</p>
    <input v-model="fullNameWritable"/>
</template>

<script setup lang="ts">
 import {ref ,computed} from 'vue';

 const firstName=ref<String>('张');
 
 const lastName=ref<String>("三");

//只读计算属性
//const fullName=computed(()=>{return `${firstName.value} ${lastName.value}`});
const fullName=computed(()=> `${firstName.value} ${lastName.value}`);

const fullName2=computed({
    get(){return `${firstName.value} ${lastName.value}`}
    ,set(val:string){firstName.value = val.charAt(0)//获取第0个下标}
        lastName.value = val.slice(1)
    }
})


//可写计算属性(getter + setter)
const fullNameWritable=computed({
    get(){
        return `${firstName.value} ${lastName.value}`;
    },
    set(val:string){
         //firstName.value = val.charAt(0)//获取第0个下标
        //lastName.value = val.slice(1)/获取第1个下标
        [firstName.value,lastName.value]=val.split(' ');
    }
})

</script>