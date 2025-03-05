<script setup lang="ts">
import { getProducts } from '@/functions/getProducts';
import { noResults } from '@/functions/noResults';

defineProps<{
    btn: string
    id: string
}>()

const filter = (id: string) => {
    const categoryID = Number(document.querySelector(`#${id}`)?.dataset.id)
    const priceMin = Number(document.querySelector(`#${id}`)?.dataset.pricemin)
    const priceMax = Number(document.querySelector(`#${id}`)?.dataset.pricemax)
    let url = `https://api.escuelajs.co/api/v1/products/`

    if (!!categoryID) url = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryID}`
    if (!!priceMax) url = `https://api.escuelajs.co/api/v1/products/?price_min=${priceMin}&price_max=${priceMax}`
    if (!!categoryID && !!priceMax) url = `https://api.escuelajs.co/api/v1/products/?price_min=${priceMin}&price_max=${priceMax}&categoryId=${categoryID}`

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.length === 0 ? noResults('grid-products') : getProducts(data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

</script>

<template>
    <button :id="id" @click="filter(id)">{{ btn }}</button>
</template>

<style>
h2.no-results {
    text-align: center;
}
</style>
