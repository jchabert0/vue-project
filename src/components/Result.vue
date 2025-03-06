<script setup lang="ts">
defineProps<{
    id: String
}>()
</script>

<template>
    <h3><span :id="id">0</span>résultat(s)</h3>
</template>

<style scoped>
h3 {
    font-size: 18px;
    color: var(--black-color);
}

span {
    padding-right: 4px;
}
</style>
