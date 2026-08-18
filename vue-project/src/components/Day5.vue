<template>
    <div>
        <n1SlotParent/>
    </div>

    <div>
        <n2SlotParent/>
    </div>

    <div>
        <n3SlotParent/>
    </div>
</template>

<script setup lang="ts">
    import n1SlotParent from '@/components/day5/N1SlotParent.vue';
    import n2SlotParent from '@/components/day5/N2SlotParent.vue';
    import n3SlotParent from '@/components/day5/N3SlotParent.vue';
</script>