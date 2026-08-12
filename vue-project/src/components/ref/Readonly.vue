<template>
  <div>
     <h1>版本号:{{version }}</h1>   
    <h1>只读版本:{{readVersion}}</h1>   
    <button v-on:click="update">修改版本</button>
   </div> 
   

</template>    

<script setup lang="ts">
    import {ref, readonly} from 'vue'   
    const version = ref<String>('1.0.0')
    //将 version做为readonly的参数 只读属性不会不起作用,readVersion.value就是version.value
    //const readVersion = readonly(version)
    //需要给个常量
    const readVersion = readonly<String>('1.0.0')
    // 正常修改原数据
    version.value = '1.0.2';
    //readVersion.value='2.0.0';//报错：只读数据无法修改
    function update(){
        version.value = '1.0.1';
    }
</script>