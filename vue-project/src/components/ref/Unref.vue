<template>
  <!--unref：自动脱ref外壳-->
  <p>{{ count }}</p>  
</template>  

<script setup lang="ts">
    import{ref,unref} from 'vue';

    const count = ref(1);

    // 自动脱壳，无需count.value
    console.log(unref(count)); // 20

</script>