<template>
 <N4SlotChild>
    <template #header>
         <h1>This is the header</h1>
    </template>

    <template #default>
         <p>This is the content</p>
    </template>

    <template #footer>
        <em>This is the footer</em>
    </template>
 </N4SlotChild>
</template>

<script setup lang="ts">
import N4SlotChild from './N4SlotChild.vue'
</script>

