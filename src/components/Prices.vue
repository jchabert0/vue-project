<script setup lang="ts">
import { getPrices } from '@/functions/getPrices';
import { getProducts } from '@/functions/getProducts';
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
    fetch('https://api.escuelajs.co/api/v1/products/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const result = data.filter((thisProduct: object) => thisProduct.price <= value);
            result.length === 0 ? noResults('grid-products') : getProducts(result)
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
    position: relative;
    width: 90%;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 1px;
    background: var(--black-color);
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: var(--white-color);
    -webkit-border-radius: 100px;
    border-radius: 100px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--primary-color);
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: var(--primary-color);
    cursor: pointer;
}

label {
    padding-bottom: 6px;
    display: block;
    color: var(--black-color);
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
