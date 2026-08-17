<template>
    <bChild v-bind="userB"/>
</template>

<script setup lang="ts">

    import bChild from './BChild.vue'
 
    interface UserB{
        name: string,
        password:string,
        age:number,
        sex:string
    }

    const userB:UserB = {
        name: '大B',
        password: '1234',
        age: 20,
        sex: 'male'
    }

   

</script>