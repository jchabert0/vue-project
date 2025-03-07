<script setup lang="ts">
import { getPrices } from '@/functions/getPrices';
import { getProducts } from '@/functions/getProducts';
import { getResult } from '@/functions/getResult';
import { noResults } from '@/functions/noResults';

defineProps<{
    name: string
    type: string
    class: string
    id: string
}>()

fetch('https://api.escuelajs.co/api/v1/products/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        getPrices(data)
    })
    .catch(function (error) {
        console.log(error);
    });

const prices = (id: string) => {
    const value = Number(document.querySelector(`#${id}`)?.value)
    let url = `https://api.escuelajs.co/api/v1/products`
    const category = document.querySelector('html')?.dataset.category
    if (!!category) url = `https://api.escuelajs.co/api/v1/products/?categoryId=${category}`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const results = data.filter((thisProduct: object) => thisProduct.price <= value);
            results.length === 0 ? noResults('grid-products') : getProducts(results)
            getResult('result', results)
        })
        .catch(function (error) {
            console.log(error);
        });
}

const write = (id: string) => {
    const value = Number(document.querySelector(`#${id}`)?.value)
    document.querySelector(`#slider-value`).innerHTML = ''
    document.querySelector(`#slider-value`).innerHTML = `${value}€`
}

</script>

<template>
    <form>
        <label :for="name">Rechercher par prix maximum:</label>
        <input :type="type" :id="name" :name="name" :class="class" @change="prices(name)" @input="write(name)" />
        <span :id="id"></span>
    </form>
</template>

<style scoped>
form {
    width: 90%;
}

span {
    position: absolute;
    top: 34px;
    right: -10%;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    height: fit-content;
}
</style>
