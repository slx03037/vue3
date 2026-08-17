<template>
    <div>
        <h1>Child Props</h1>
        <p>{{ msg }}</p>
        <p>{{ name }}</p>
    </div>
</template>

<script setup lang="ts">
  //方式一：运行时声明(带默认值)
//   const props= defineProps({
//       msg:{
//         type:String,
//         required:true
//       },
//       name:{
//         type:String,
//         required:true,
//         default:'张三'
//       }
//   })

  //方式二: TS类型声明(推荐，更简洁)
  interface User{
    msg:string,
    name:string
    list?:String[]
  }
  const props= withDefaults(defineProps<User>(),{
    name:'张三',
    msg:'hello world'
    //list?:()=>[]
  })

//  console.log(props.msg,props.name,props.list)
console.log(props.msg,props.name)
</script>


<style scoped>
    h1 {
        color: blue;
    }
</style>