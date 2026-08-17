<template>
    <emChild @update="hanldeUpdate" @delete="handleDelete"></emChild>
    <p>删除id:{{ deleteId }}</p>
    <p>更新操作:{{ update }}</p>
</template>

<script setup lang="ts">
import emChild from './EmChild.vue';
import { ref } from 'vue';

const update=ref('');
const deleteId=ref<Number>();


function hanldeUpdate(value: string){
    console.log(`收到子组件信息 更新 ${value}`)
    update.value=value;
}

function handleDelete(id:number){
      console.log(`收到子组件信息 删除 ${id}`)
      deleteId.value=id;
}

</script>