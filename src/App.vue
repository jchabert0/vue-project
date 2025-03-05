<script setup lang="ts">
import Header from './components/Header.vue';
import Name from './components/Name.vue';
import Prices from './components/Prices.vue';
import Products from './components/Products.vue';
import Title from './components/Title.vue';
</script>

<template>
  <main>
    <Header />
    <section class="search">
      <div class="container">
        <Title title="Home" />
        <div class="grid">
          <div class="col-12 col-lg-6">
            <Name name="titleSearch" type="text" class="title" />
          </div>
          <div class="col-12 col-lg-6">
            <Prices name="priceMax" type="range" class="slider" id="slider-value" />
          </div>
        </div>
      </div>
    </section>
    <section class="products">
      <div class="container">
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
