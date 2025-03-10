<script setup lang="ts">
import { getProducts } from '@/functions/getProducts';
import { getResult } from '@/functions/getResult';

defineProps<{
    class: string
    id: string
}>()

fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //console.log(data)
        getProducts(data)
        getResult('result', data)
    })
    .catch(function (error) {
        console.log(error);
    });
</script>

<template>
    <aside>Added to cart<button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                fill="var(--white-color)">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
        </button></aside>
    <div :class="class" :id="id"></div>
</template>

<style>
article.product {
    position: relative;
}

article.product span {
    position: absolute;
    left: 4px;
    top: 4px;
    background: rgba(250, 250, 250, .8);
    color: var(--black-color);
    z-index: 1;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 12px;
    padding-right: 16px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
}

article.product .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

article.product h3 {
    font-weight: 100;
    text-align: left;
    font-size: 16px;
    margin-right: 16px;
}

article.product .modal h3 {
    font-weight: 900;
    text-align: left;
    font-size: 28px;
    margin-right: 0;
}

.order-content {
    display: flex;
    align-items: center;
}

.order-content:first-child {
    margin-top: 24px;
}

.order-content:last-child {
    margin-bottom: 24px;
}

.order-content {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--system-color);
}

.order-content.deleted {
    opacity: 0;
    visibility: hidden;
    display: none;
}

.order-content img {
    width: auto;
}

.order-content__title {
    padding-left: 24px;
}

.order-content__title h3 {
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 0;
}

.total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
}

.total span {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 20px;
    color: var(--black-color);
    font-weight: 900;
}
</style>
