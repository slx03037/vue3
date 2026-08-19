<template>
    <h3>onBeforeMount</h3>
    <div>   
        <p>{{ msg }}</p>
    </div>
</template>    

<script setup lang="ts">
import { ref,onBeforeMount } from 'vue';

const msg = ref("Hello World");

onBeforeMount(() => {
    console.log("onBeforeMount");
    msg.value = "onBeforeMount Hello World";
});

</script>