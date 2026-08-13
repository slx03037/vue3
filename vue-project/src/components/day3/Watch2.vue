<template>
    <div>
        <h1>Watch2</h1>
        <input type="text" v-model="count" />
        <p>{{ count }}</p>
    </div>
     <div>
        <p>对象</p>
        <input type="text" v-model="user.name" />
        <p>{{ user.name }}</p>
        <input type="text" v-model="user.age" />
        <p>{{ user.age }}</p>
     </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
interface User{
    name:string,
    age:number
}
const count = ref(0)
const user= ref<User>({
    name:'张三',
    age:18
})

// 监听单个 ref
watch(count,(newVal,oldVal)=>{
    console.log(`监听单个 ${newVal},${oldVal}`)
})

//监听 getter 函数（监听对象属性）
watch(
    ()=>user.value.name,
    (newVal)=>{
        console.log(`名字的变化 ${newVal}`)
    }
)


// 监听整个对象（需要 deep: true）
watch(user,(newVal,oldVal)=>{
    console.log(`监听整个多对象${newVal},${oldVal}`)
    },  {deep:true,immediate:true}
    )

//// 监听多个数据源
watch([count,()=>{user.value.name}],([newCount,newName], [oldCount,oldName])=>{
    console.log(`监听多个数据源 ${newCount},${oldCount},${newName},${oldName}`)
})    
</script>