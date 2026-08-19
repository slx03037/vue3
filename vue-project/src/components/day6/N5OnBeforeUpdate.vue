<template>
    <h3>onBeforeUpdate</h3>
    <div>   
        <p>{{ msg }}</p>
    </div>
    <button @click="change">Change</button>
</template>    

<script setup lang="ts">
import { ref,onBeforeUpdate ,onUpdated} from 'vue';

const msg = ref('Hello World');


/**
 * 点击事件先执行，onBeforeUpdate会先执行，然后onUpdated再执行
 */
onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
    msg.value = 'Hello onUpdated';
})

function change(){
    console.log('change');
     msg.value = 'Hello vue';
}

onUpdated(() => {
    console.log('onUpdated');
})


</script>