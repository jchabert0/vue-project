<script setup lang="ts">
defineProps<{
    id: string
}>()
</script>

<template>
    <h3><span :id="id">0</span>result(s)</h3>
</template>

<style scoped>
span {
    margin-top: 0;
    margin-bottom: 18px;
    margin-right: 4px;
    font-size: 18px;
    color: var(--black-color);
    font-weight: 900;
}
</style>
