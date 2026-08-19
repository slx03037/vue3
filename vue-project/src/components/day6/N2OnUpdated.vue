<template>
    <h2>OnUpdated</h2>
    <p>{{ count }}</p>
    <button id="count" @click="change">Change</button>
</template>    


<script setup lang="ts">
import { ref, onUpdated } from 'vue'

const count = ref(0)

const change = () => {
    count.value++
}

onUpdated(() => {
    console.log('onUpdated')
     // 文本内容应该与当前的 `count.value` 一致
    /**
     * document.getElementById('count') 的返回类型是 HTMLElement | null，因为：
     *  1.getElementById 方法可能找不到指定 id 的元素，此时会返回 null
     *  2.TypeScript 的严格模式下，不允许直接访问可能为 null 的对象的属性
     *  3.代码中直接访问 .textContent 属性，而没有先检查元素是否存在
     */
   // console.log(document.getElementById('count').textContent)
   
    /**
     * 使用可选链操作符
     */
    console.log(document.getElementById('count')?.textContent)
    /**
     * 使用非空断言操作符 
     * 如果确定元素一定存在，可以使用非空断言操作符 !
     */
    //如果没有 id=count 报运行时异常 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'textContent')
    console.log(document.getElementById('count')!.textContent)
    /**
     * 使用类型守卫
     */
    const element = document.getElementById('count')
    if (element) {
        console.log(element.textContent)
    }
    
})
</script>