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
    text-align: center;
}
</style>
