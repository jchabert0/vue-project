<script setup lang="ts">
import { getProducts } from '@/functions/getProducts';
import { getResult } from '@/functions/getResult';
import { noResults } from '@/functions/noResults';

defineProps<{
    id: String
}>()

const select = (id: String) => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const value = document.querySelector(`#${id}`)?.value
            let results = data
            if (value === "publication") {
                results = data.sort((a: Date, b: Date) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime())
            } else if (value === "update") {
                results = data.sort((a: Date, b: Date) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime())
            } else if (value === "ascending") {
                results = data.sort((a: Number, b: Number) => a.price - b.price);
            } else if (value === "descending") {
                results = data.sort((a: Number, b: Number) => b.price - a.price);
            }
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
        <label :for="id">Trier par: </label>
        <select :name="id" :id="id" @change="select(id)">
            <option value="default">Default</option>
            <option value="publication">Date de parution</option>
            <option value="update">Date de mise à jour</option>
            <option value="ascending">Prix croissant</option>
            <option value="descending">Prix décroissant</option>
        </select>
    </form>
</template>

<style scoped>
label {
    font-size: 18px;
    color: var(--black-color);
}
</style>
