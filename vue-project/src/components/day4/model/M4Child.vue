<template> 
    <input :value="fristName" @input="$emit('update:fristName',($event.target as HTMLInputElement).value)"/>
    <input :value="lastName" @input="$emit('update:lastName',($event.target as HTMLInputElement).value)"/>
</template>

<script setup lang="ts">


const props = defineProps(['fristName','lastName'])
const emit = defineEmits(['update:fristName','update:lastName'])

</script>

