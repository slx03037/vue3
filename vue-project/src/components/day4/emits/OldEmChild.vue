<template>
    <div>
        <button @click="handleSend">向父组件传参</button>
    </div>
</template>

<script setup lang="ts">

const emit=defineEmits(["sendMsg"])

const handleSend = () => {
    const msg = "子组件向父组件传参"
    emit("sendMsg", msg)
}
</script>
