<template>
    <div>   
        <p>this is avliable component </p>
        <button @click="throwError">触发错误</button>
    </div>
</template>

<script setup lang="ts">    
    function throwError() {
        throw new Error('this is a error')
    }
</script>