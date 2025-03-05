<script setup lang="ts">
defineProps<{
}>()

import { getCategories } from "@/functions/getCategories";
import { getProducts } from "@/functions/getProducts";

fetch(`https://api.escuelajs.co/api/v1/categories`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        getCategories(data)
        document.querySelectorAll('.category').forEach(category => {
            category.addEventListener('click', () => {
                const categoryID = category.dataset.id
                fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryID}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        data.length === 0 ? noResults('grid-products') : getProducts(data)
                    }).catch(function (error) {
                        console.log(error);
                    });
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

button.category {
    position: relative;
    color: var(--black-color);
    background: var(--white-color);
    cursor: pointer;
    border: none;
    padding-right: 0;
    padding-left: 0;
    margin-right: 24px;
}

button.category:before {
    background: var(--black-color);
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    -webkit-transition: width .2 ease;
    transition: width .2s ease;
    width: 0;
}

button.category.active::before,
button.category:hover:before {
    width: 100%;
}
</style>
