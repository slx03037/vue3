<template>
  <List>
    <template #default="{item,index}">
        <span>{{ index+1 }}.{{ item.name }}</span>
        <span :style="{color:item.status=='在售'?'green':'red'}">
            [{{ item.status }}]
        </span>
    </template>
  </List>    
</template>

<script setup lang="ts">
import List from './N3SlotChild.vue'



</script>