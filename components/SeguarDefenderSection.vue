<template>
  <div class="bg-secondary">
    <div class="max-w-[1170px] mx-auto px-6 py-10 grid md:grid-cols-3 grid-cols-1 gap-10 items-center">
      <div class="col-span-2 text-white">
          <h2 class="text-3xl font-bold">{{ sugerDefenderData.TITLE }}</h2>
           <div class="text-xl font-normal my-5">
            <p>{{ sugerDefenderData.DESCRIPTION1 }}</p>
            <p class="my-6">{{ sugerDefenderData.DESCRIPTION2 }}</p>
            <p>{{ sugerDefenderData.DESCRIPTION3 }}</p>
           </div>
      </div>
      <div class="col-span-1">
         <div class="w-full">
             <nuxt-link :to="REFFEREL_LINK" target="_blank">
              <img class="w-full hover:scale-105 transition duration-500 ease-in-out" :src="sugerDefenderData.IMAGE" alt="">
            </nuxt-link>
         </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { sugerDefenderData } from '~/api/constantData';
</script>
<style>
  
</style>