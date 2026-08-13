<!--computed 基于响应式数据计算派生值，具有缓存，只有依赖变化时才重新计算-->
<template>  
    <p> 全名：{{ fullname }}</p>
    <input v-model="fullNameWritable"/>
</template>

<script>
export default {
    data() {
        return {
            firstName: '张',
            lastName: '三',
            fullNameWritable: '张三'
        }
    },
    computed: {
        fullname() {
            console.log('computed')
            return this.firstName + this.lastName
        }
    },
    watch: {
        fullname(newVal, oldVal) {
            console.log('watch', newVal, oldVal)
            this.fullNameWritable = newVal
        }
    }
}
</script>