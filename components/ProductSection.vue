<template>
  <div>
    <div class="max-w-[1170px] mx-auto px-6 py-10">
        <h2 class="text-center text-3xl font-oswald md:text-4xl font-bold text-primary">{{ productData.TITLE }}</h2>
        <div class="grid md:grid-cols-3 gap-5 mt-20">
          <div v-for="product in productData.PRODUCTS" :key="product.id">
            <NuxtLink :to="REFFEREL_LINK" target="_blank">
            <img class="hover:scale-105 transition duration-500 ease-in-out" :src="product.img" alt="">
          </NuxtLink>
          </div>
      </div>
      <div class="mt-20 flex justify-center">
        <nuxt-link :to="REFFEREL_LINK" target="_blank">
          <img :src="productData.REVIEWIMG" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { productData } from "~/api/constantData";
</script>
<style>
  
</style>