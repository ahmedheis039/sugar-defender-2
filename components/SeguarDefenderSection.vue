<template>
  <div class="bg-secondary">
    <div class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-3 gap-10 items-center">
      <div class="col-span-2 text-white">
          <h2 class="text-3xl font-bold">{{ sugerDefenderData.TITLE }}</h2>
           <div class="text-xl font-normal my-5">
            <p>{{ sugerDefenderData.DESCRIPTION1 }}</p>
            <p class="my-6">{{ sugerDefenderData.DESCRIPTION2 }}</p>
            <p>{{ sugerDefenderData.DESCRIPTION3 }}</p>
           </div>
      </div>
      <div class="col-span-1">
         <div>
          <img :src="sugerDefenderData.IMAGE" alt="">
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