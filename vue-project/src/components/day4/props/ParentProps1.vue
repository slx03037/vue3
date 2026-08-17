<template>
    <child :title="title" :count="count"></child>
</template>

<script>
import Child from './ChildProps1.vue'
export default {
    components: {
        Child
    },
    data() {
        return {
            title: 'Hello World',
            count: 100
        }
    }
}
</script>