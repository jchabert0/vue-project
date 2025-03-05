<script setup lang="ts">

defineProps<{
    class: string
    id: string
}>()

import { getCategories } from "@/functions/getCategories";

fetch('https://api.escuelajs.co/api/v1/categories')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        getCategories(data)
    }).catch(function (error) {
        console.log(error);
    });
</script>

<template>
    <div :class="class" :id="id"></div>
</template>

<style>
.category {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

.category img {
    width: 100%;
    object-fit: cover;
}

.category h3 {
    color: var(--system-color);
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: left;
    margin-left: 12px;
    margin-right: 12px;
}
</style>
