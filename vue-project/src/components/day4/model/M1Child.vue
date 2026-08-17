<template>
  <div>
    <input  
        :value="modelValue"  
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
        />
      <p>子组件内容:{{ props.modelValue }}</p>
  </div>
</template>

<script setup lang="ts">
 const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
 })

 const emit=defineEmits<{
    (e: 'update:modelValue', value: string): void
 }>()

</script>