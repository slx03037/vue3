<template>
    <!-- <div>
        <parentProp1/>
    </div>
    <div>
        <parentProp/>
    </div>
    <div>
        <oldParentProp/>
    </div>
    <div>
        <oldParentProp1/>
    </div>
    <div>
        <goodParent/>
    </div>
    <div>
        <tParentProps/>
    </div>
    <div>
        <t1Parent/>
    </div>
    <div>
        <bParent/>
    </div>
    <div>
        <uParent/>
    </div>
    <div>
        <comParent/>
    </div> -->



    <div>
        <oldEmParent/>
    </div>

    <div>
        <emParent/>
    </div>
    <div>
        <em1Parent/>
    </div>
    <div>
        <em2Parent/>
    </div>
    <div>
        <paramEmParent/>
    </div>
    <div>
        <param1Parent/>
    </div>
    <div>
        <n1EmparentProp/>
    </div>
    <div>
        <n1ParentProps/>
    </div>
    <div>
        <n1Parent/>
    </div>

    <div>
        <m1Parent/>
    </div>

    <div>
        <m2Demo/>
    </div>

    <div>
        <m3Parent/>
    </div>

    <div>
        <m4Parent/>
    </div>

    <div>
        <n1EPrarent/>
    </div>

    <div>
        <n2Prarent/>
    </div>
</template>    

<script setup lang="ts">
    // prps 父传子
    import parentProp1 from '@/components/day4/props/ParentProps1.vue';
    import parentProp from '@/components/day4/props/ParentProps.vue';
    import oldParentProp from '@/components/day4/props/OldParentProps.vue';
    import oldParentProp1 from '@/components/day4/props/OldParentProps1.vue';
    import goodParent from '@/components/day4/props/GoodParent.vue';
    import tParentProps from '@/components/day4/props/TParentProps.vue';
    import t1Parent from '@/components/day4/props/T1Parent.vue';
    import bParent from '@/components/day4/props/BParent.vue';
    import uParent from '@/components/day4/props/UParent.vue';
    import comParent from '@/components/day4/props/ComParent.vue';
    //day4 props
    import n1ParentProps from '@/components/day4/props/node2/N1ParentProps.vue';
    import n1Parent from '@/components/day4/props/node2/N2ParentProps.vue';

    //emits 子传父
    import oldEmParent from '@/components/day4/emits/OldEmParent.vue';
    import emParent from '@/components/day4/emits/EmParent.vue';
    import em1Parent from '@/components/day4/emits/Em1Parent.vue';
    import em2Parent from '@/components/day4/emits/Em2Parent.vue';
    import paramEmParent from '@/components/day4/emits/ParamEmParent.vue';
    import param1Parent from '@/components/day4/emits/Param1Parent.vue';
    //day4 emit
    import n1EmparentProp from '@/components/day4/emits/node2/N1EmParent.vue';


    //model
    import m1Parent from '@/components/day4/model/M1Parent.vue';
    import m2Demo from '@/components/day4/model/M2Demo.vue';
    import m3Parent from '@/components/day4/model/M3Parent.vue';
    import m4Parent from '@/components/day4/model/M4Parent.vue';

    //defineExpose — 子组件暴露方法
    import n1EPrarent from '@/components/day4/expose/N1EPrarent.vue';

    //ref
     import n2Prarent from '@/components/day4/ref/N2Parent.vue';
</script>

