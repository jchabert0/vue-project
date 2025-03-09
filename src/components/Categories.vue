<script setup lang="ts">
defineProps<{
}>()

import { getCategories } from "@/functions/getCategories";
import { getProducts } from "@/functions/getProducts";
import { getResult } from "@/functions/getResult";
import { noResults } from "@/functions/noResults";

fetch(`https://api.escuelajs.co/api/v1/categories`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        getCategories(data)
        document.querySelectorAll('.getCategory').forEach(category => {
            category.addEventListener('click', () => {
                const categoryID = Number(category.dataset.id)
                document.querySelector('html')?.setAttribute('data-category', `${categoryID}`)
                fetch(`https://api.escuelajs.co/api/v1/products`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        const results = data.filter((product: object) => product.category.id === categoryID)
                        results.length === 0 ? noResults('grid-products') : getProducts(results)
                        getResult('result', results)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        });
        document.querySelector('.all')?.addEventListener('click', () => {
            document.querySelector('html')?.setAttribute('data-category', '')
            fetch(`https://api.escuelajs.co/api/v1/products`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    getProducts(data)
                    getResult('result', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }).catch(function (error) {
        console.log(error);
    });

</script>

<template>
    <header></header>
</template>

<style>
header {
    background: var(--white-color);
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: var(--system-color);
}

header button {
    margin-right: 16px;
}

header button small {
    position: absolute;
    top: -7px;
    right: -7px;
    height: 14px;
    width: 14px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--primary-color);
    color: var(--primary-color);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white-color);
}
</style>
