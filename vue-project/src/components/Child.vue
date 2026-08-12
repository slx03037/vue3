<template>
    <!--组件传参是开发刚需，defineProps专门接收父组件参数，
    搭配TS可以做强类型校验，杜绝参数类型错乱、缺参报错！-->

    <!--子组件Child.vue-->
    <p>接收父组件参数：{{ id }} - {{ title }}</p>
</template>

<script setup lang="ts">
//import { defineProps } from 'vue'

// 接收父组件参数 , TS类型约束Props，精准定义参数类型、默认值、是否必传
const props = defineProps<{
  id: number; // 必传数字类型
  title?: string; // 可选字符串类型
}>();
// id和title是父组件传递过来的，这里是在接收
const props1 = defineProps({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String, 
        required: true
    }
})

// 可选参数设置默认值（TS专属写法）
const props2 = withDefaults(defineProps<{
  id: number;
  title?: string;
}>(), {
  title: "默认标题"
});
</script>

