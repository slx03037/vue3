<template>
    <div>
        <h3>用户名:{{ name }}</h3>
        <p>年龄:{{ age }}</p>
        <p>是否VIP{{ isVip ? '是' : '否' }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '张三'
        },
        age: {
            type: Number,
            default: 18
        },
        isVip: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>