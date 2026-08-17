<template>
    <div >
        <p> T|F {{ disable }}</p>
       
    </div>
</template>   

<script setup lang="ts">

const props = defineProps({
    disable: Boolean
})
</script>