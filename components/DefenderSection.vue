<template>
  <div>
    <div class="max-w-[1170px] mx-auto px-6 py-10">
         <div class="text-center">
          <h2 class="text-4xl font-bold">{{ defenderSectionData.TITLE }}</h2>
          <h3 class="text-2xl">{{ defenderSectionData.SUB_TITLE }}</h3>
         </div>
         <div >
          <p v-for="description in defenderSectionData.DESCRIPTION" :key="description.id" class="text-2xl font-normal my-3 text-justify" ><span class="font-bold">{{ description.title }}</span> {{ description.description }}</p>
         </div>
    </div>
  </div>
</template>
<script setup>
import { defenderSectionData } from '~/api/constantData';
</script>
<style>
  
</style>