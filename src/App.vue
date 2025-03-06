<script setup lang="ts">
import Categories from './components/Categories.vue';
import Search from './components/Search.vue';
import Prices from './components/Prices.vue';
import Products from './components/Products.vue';
import Title from './components/Title.vue';
import Sort from './components/Sort.vue';
</script>

<template>
  <main>
    <Categories />
    <section class="search">
      <div class="container">
        <Title title="Work in progress" />
        <div class="grid">
          <div class="col-12 col-lg-6">
            <Search name="titleSearch" type="text" class="title" />
          </div>
          <div class="col-12 col-lg-6">
            <Prices name="priceMax" type="range" class="slider" id="slider-value" />
          </div>
        </div>
      </div>
    </section>
    <section class="products">
      <div class="container">
        <Sort id="sort" />
        <Products class="grid" id="grid-products" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.search .grid {
  grid-gap: 60px;
}
</style>
