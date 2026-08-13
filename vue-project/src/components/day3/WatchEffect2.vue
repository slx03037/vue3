<template>
  <div>
    <h1>Watch Effect</h1>
    <input type="text" v-model="name" />
    <p>{{ name }}</p>
  </div>
</template>

<script>    
import { ref, watchEffect } from "vue";

export default {
  name: "WatchEffect",
  setup() {
    const name = ref("");

    watchEffect(() => {
      console.log("watchEffect called");
      console.log(name.value);
    });

    return {
      name,
    };
</script>