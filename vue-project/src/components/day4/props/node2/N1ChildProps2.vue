<template>
    <h3>子组件:Child</h3>
    <p>内容1:{{ text }}</p>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'N1ChildProps2',
    props: {
      text: {
        type: String,
        default: '默认值'
      }
    }
  })
</script>