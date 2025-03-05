<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <h1 id="title" class="title">{{ title }}</h1>
</template>

<style scoped>
h1 {
    margin-top: 0;
    margin-bottom: 24px;
    text-align: center;
    font-size: 24px;
}
</style>
