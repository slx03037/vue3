<template>
    <div>
        <h1>Watch</h1>
        <input type="text" v-model="name">
        <p>{{name}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:''
        }
    },
    watch:{
        name(){
            console.log('name changed')
        }
    }
}
</script>
