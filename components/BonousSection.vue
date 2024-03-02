<template>
  <div class="bg-secondary">
    <div class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 gap-5">
      <div class="grid md:grid-cols-4 grid-cols-1 items-center gap-10 bg-[#2A324B] rounded-2xl border border-black p-10" v-for="bonous in bonusSectionData. BONOUSITEMS" :key="bonous.id">
          <div class="col-span-1">
            <nuxt-link :to="REFFEREL_LINK">
              <img class="rounded-full text-center" :src="bonous.img" alt="">
            </nuxt-link>
          </div>
          <div class="col-span-3 text-center md:text-left">
            <nuxt-link :to="REFFEREL_LINK">
              <h2 class="text-4xl font-bold text-[#FFE500]">{{ bonous.title }}</h2>
            <h3 class="text-2xl md:text-4xl text-white font-semibold my-5">{{ bonous.description }}</h3>
            </nuxt-link>
            <p class="text-xl md:text-2xl font-semibold text-white">{{ bonous.download }}</p>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { bonusSectionData } from '~/api/constantData';
</script>
<style>
  
</style>