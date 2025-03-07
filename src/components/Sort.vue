<script setup lang="ts">
import { getProducts } from '@/functions/getProducts';
import { getResult } from '@/functions/getResult';
import { noResults } from '@/functions/noResults';

defineProps<{
    id: string
}>()

const select = (id: string) => {
    let url = `https://api.escuelajs.co/api/v1/products`
    const category = document.querySelector('html')?.dataset.category
    if (!!category) url = `https://api.escuelajs.co/api/v1/products/?categoryId=${category}`
    fetch(url)
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
                results = data.sort((a: number, b: number) => a.price - b.price);
            } else if (value === "descending") {
                results = data.sort((a: number, b: number) => b.price - a.price);
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

<style scoped></style>
