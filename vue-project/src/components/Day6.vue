<template>
    <div>
        <N1onMounted/>
    </div>

    <div>
        <N2OnUpdated/>
    </div>

    <div>
        <N3OnUnmounted/>
    </div>

    <div>
        <N4OnBeforeMount/>
    </div>

    <div>
        <N5OnBeforeUpdate/>
    </div>

     <div>
        <N6OnBeforeUnmount/>
    </div>

    <div>
        <N7OnErrorCaptured/>
    </div>

    <div>
        <NTest/>
    </div>
</template>

<script setup lang="ts">
    import N1onMounted from '@/components/day6/N1OnMounted.vue';
    import N2OnUpdated from '@/components/day6/N2OnUpdated.vue';
    import N3OnUnmounted from '@/components/day6/N3OnUnmounted.vue';
    import N4OnBeforeMount from '@/components/day6/N4OnBeforeMount.vue';
    import N5OnBeforeUpdate from '@/components/day6/N5OnBeforeUpdate.vue';
    import N6OnBeforeUnmount from '@/components/day6/N6OnBeforeUnmount.vue';
    import N7OnErrorCaptured from '@/components/day6/N7OnErrorCapturedParent.vue';
    import NTest from '@/components/day6/NTest.vue';
</script>