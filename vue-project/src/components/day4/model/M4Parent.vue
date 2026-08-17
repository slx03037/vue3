<template>
  <div>
    <h1>Parent</h1>
    <M4Child 
        v-model:frist-name="firstName"
        v-model:last-name="lastName"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import M4Child from "./M4Child.vue";

const firstName = ref("John");
const lastName = ref("Doe");


</script>
