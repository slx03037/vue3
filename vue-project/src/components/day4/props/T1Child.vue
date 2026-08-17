<template>
    <div >
        <p> T|F {{ disable }}</p>
       <p> T|F {{ name }}</p>
    </div>
</template>   

<script setup lang="ts">




const props = defineProps({ value:Boolean, name:String});


const disable = props.value;
const name = props.name;


//const props = defineProps({Boolean,String});
</script>