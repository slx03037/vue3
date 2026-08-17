<template>
    <div class="pd">
        <button
        v-for="(item,index) in componentList"
        >{{ item.name }}</button>
    </div>
</template>

<script lang="ts">
    import child from './N1ChildProps1.vue';
    import child2 from './N1ChildProps2.vue';
    import { defineComponent, reactive, ref, shallowRef} from 'vue';
    export default defineComponent({
        name: '父组件',
        components: {
            child,
            child2
        },
        setup() {
            // reactive 会使数据变成响应式，此处为了节省性能开销，可以使用 shallowRef 或者 markRaw 跳过 proxy 代理
            const currentComponent = shallowRef(child);
            const text= ref('hellon world');

            const componentList = reactive([
                {
                    name: 'child',
                    component: child
                },
                {
                    name: 'child2',
                    component: child2
                }
            ])
            return {
                currentComponent,
                text,
                componentList
            }
        }
    })
    

</script>

<style scoped>
    .pd{
        font-size: 14px;
    }
</style>