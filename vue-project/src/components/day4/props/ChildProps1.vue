<template>
    <div>
        <h1>titele:{{ title }}</h1>
        <p>计数:{{ count }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        count: Number
    }
}



</script>

<style scoped>
h1 {
    color: red;
}
</style>