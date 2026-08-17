<template>
  
    <t1Child :disbale=diable :name=name />
</template>

<script setup lang="ts">
import t1Child from './T1Child.vue';
import {ref} from 'vue';

const diable=ref(false);
const name=ref("json");
</script>