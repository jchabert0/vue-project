<script setup lang="ts">
import { getProducts } from '@/functions/getProducts';
import { getResult } from '@/functions/getResult';
import { noResults } from '@/functions/noResults';

defineProps<{
    name: string
    type: string
    class: string
}>()

const search = (id: string) => {
    const value = document.querySelector(`#${id}`)?.value
    let url = `https://api.escuelajs.co/api/v1/products`
    const category = document.querySelector('html')?.dataset.category
    if (!!category) url = `https://api.escuelajs.co/api/v1/products/?categoryId=${category}`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const results = data.filter((product: object) => product.title.includes(value));
            results.length === 0 ? noResults('grid-products') : getProducts(results)
            getResult('result', results)
        })
        .catch(function (error) {
            console.log(error);
        });
}

</script>

<template>
    <form>
        <label :for="name">Search by name:</label>
        <input :type="type" :id="name" :name="name" :class="class" @input="search(name)" />
    </form>
</template>

<style scoped></style>
