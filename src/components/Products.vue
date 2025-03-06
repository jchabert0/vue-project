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
        console.log(data)
        getProducts(data)
        getResult('result', data)
    })
    .catch(function (error) {
        console.log(error);
    });
</script>

<template>
    <div :class="class" :id="id"></div>
</template>

<style>
article.product .modal {
    -webkit-transition: transform .2s ease;
    transition: transform .2s ease;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--white-color);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

article.product .modal:not(.open) {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: scale(0);
    transform: scale(0);
}

article.product .close-modal {
    position: absolute;
    top: 12px;
    right: 12px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--black-color);
    border-radius: 100px;
    display: flex;
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
}

article.product .modal-content img {
    object-fit: contain;
}

article.product .modal-content h3 {
    font-size: 28px;
}

article.product .modal-content h4 {
    margin: 0;
}

article.product .modal-content p {
    margin-top: 12px;
    margin-bottom: 0;
    font-weight: 100;
    color: var(--black-color);
}

article.product .slider-wrapper {
    position: relative;
}

article.product .slides-container {
    width: 100%;
    display: -webkit-box;
    display: flex;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
}

article.product .slide-arrow {
    position: absolute;
    display: -webkit-box;
    display: flex;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 4rem;
    background-color: white;
    border: none;
    width: 2rem;
    font-size: 3rem;
    padding: 0;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 100ms;
}

article.product .slide-arrow.hide {
    visibility: hidden;
}

article.product .slide-arrow:hover,
article.product .slide-arrow:focus {
    opacity: 1;
}

article.product .slide-arrow__prev {
    left: 0;
    padding-left: 0.25rem;
    border-radius: 0 2rem 2rem 0;
}

article.product .slide-arrow__next {
    right: 0;
    padding-left: 0.75rem;
    border-radius: 2rem 0 0 2rem;
}

article.product .slide {
    width: 100%;
    height: 100%;
    flex: 1 0 100%;
}

article.product {
    position: relative;
}

article.product button {
    margin: 0;
    padding: 0;
    border: none;
    background: var(--white-color);
    cursor: pointer;
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

article.product img {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
}

article.product .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

article.product h3 {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 100;
    color: var(--black-color);
    text-align: left;
}

article.product h4 {
    margin-left: 12px;
    font-size: 18px;
    color: var(--black-color);
}
</style>
