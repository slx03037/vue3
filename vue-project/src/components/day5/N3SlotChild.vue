<template>
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}
             <!-- 将 item 传递给父组件 -->
            <slot :item="item" :index="items.indexOf(item)">
                <!-- 默认渲染 -->
                {{ item.name }}
            </slot>
        </li>
    </ul>
</template> 

<script setup lang="ts">
import { ref } from 'vue'

 interface Item{
    id:number,
    name:string
    status:string
 }
 const items=ref<Item[]>([
  { id: 1, name: '苹果', status: '在售' },
  { id: 2, name: '香蕉', status: '售罄' },
  { id: 3, name: '橙子', status: '在售' }
])

</script>