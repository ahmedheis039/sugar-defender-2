<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-5 grid md:grid-cols-2 gap-5">
        <div class="col-span-1">
          <nuxt-link :to="REFFEREL_LINK">
            <h2 class="text-4xl md:text-5xl font-bold text-primary">SUGAR DEFENDER</h2>
          </nuxt-link>
        </div>
        <div class="hidden md:flex gap-10 items-center justify-end">
            <div class="flex gap-10">
              <nuxt-link class="text-2xl font-semibold text-primary" :to="REFFEREL_LINK">Benefits</nuxt-link>
              <nuxt-link class="text-2xl font-semibold text-primary" :to="REFFEREL_LINK">Price</nuxt-link>
              <nuxt-link class="text-2xl font-semibold text-primary" :to="REFFEREL_LINK">FAQ's</nuxt-link>
            </div>
            <div>
          <nuxt-link :to="REFFEREL_LINK">
            <button class="px-5 py-3 bg-primary text-white text-xl font-semibold flex items-center gap-3 rounded-3xl border">Order Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
          </nuxt-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import { REFFEREL_LINK } from '~/utils';


</script>
<style>
  
</style>