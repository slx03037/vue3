<template>

    <div>
        <h1>Emits Parent</h1>
        <oldEmChild @sendMsg="handleEvent" />
    </div>
</template>

<script setup lang="ts">
import oldEmChild from './OldEmChild.vue'

const handleEvent = (msg: string) => {
    console.log(msg)
}

</script>