<template>
    <h3>子组件:child2</h3>
    <p>{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'N1ChildProps1',
    props: {
        text: {
            type: String,
            default: 'default text'
        }
    }
})

</script>