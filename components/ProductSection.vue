<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-20 ">
        <h2 class="text-center text-4xl font-bold text-primary">{{ productData.TITLE }}</h2>
        <div class="grid grid-cols-3 gap-5 mt-20">
          <div v-for="product in productData.PRODUCTS" :key="product.id">
            <NuxtLink :to="product.link">
            <img :src="product.img" alt="">
          </NuxtLink>
          </div>
      </div>
      <div class="mt-20 flex justify-center">
        <img :src="productData.REVIEWIMG" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>
import { productData } from "~/api/constantData";
</script>
<style>
  
</style>