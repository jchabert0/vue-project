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
        <label :for="name">Rechercher par nom:</label>
        <input :type="type" :id="name" :name="name" :class="class" @input="search(name)" />
    </form>
</template>

<style scoped>
label {
    color: var(--black-color);
    padding-bottom: 6px;
    display: block;
}

input {
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: var(--black-color);
    -webkit-border-radius: 4px;
    border-radius: 4px;
}
</style>
