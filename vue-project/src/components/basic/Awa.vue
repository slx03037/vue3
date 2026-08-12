<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
    name: 'Awa',
    data() {
        return {
            msg: 'Hello Vue!'
        }
    },
    methods:{
        //顶层await：异步代码直接写
        async  getInfo() {
            let res = await fetch('http://localhost:3000/api/getInfo')
            let data = await res.json()
            console.log(data)
        } 
    },
    mounted() {
        this.getInfo()
    }
   
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>    
