<template>
  <div class="bg-primary">
    <div class="max-w-[1170px] mx-auto px-6 py-20 mt-16 grid md:grid-cols-2 items-center gap-5">
        <div>
          <div class="xl:w-full md:w-[80%]">
            <nuxt-link :to="REFFEREL_LINK" target="_blank">
              <img class="w-full h-full" :src="bannerSectionData.BANNERIMAGE" alt="">
            </nuxt-link>
          </div>

          <div class="mt-5">
            <nuxt-link :to="REFFEREL_LINK" target="_blank">
              <img class="w-full h-full" :src="bannerSectionData.BANNERFOOTERIMG" alt="">
            </nuxt-link>
          </div>
        </div>
        <div class="text-white">
          <h2 class="xl:text-4xl md:text-2xl font-bold">{{ bannerSectionData.HEADLINE }}</h2> 
          <p class="my-5 xl:text-xl md:text-sm py-5 tracking-wider border-b border-t">{{ bannerSectionData.DESCRIPTION }}</p>

          <h3 class="xl:text-3xl md:text-xl font-oswald text-center font-bold">{{ bannerSectionData.REGPRICE }} - <span class="line-through">{{ bannerSectionData.REGPRICEVALUE }}</span></h3>
          <h3 class="xl:text-3xl md:text-xl font-oswald text-center lg:mt-5 md:mt-3 font-bold">{{ bannerSectionData.TODAYOFFER }}</h3>

         <div class="text-center mt-10">
      <nuxt-link :to="REFFEREL_LINK" target="_blank">
        <button class="md:px-10 px-6 py-3 bg-buttonBG text-black xl:text-xl md:text-md rounded-xl border border-black font-bold hover:scale-105 transition duration-500 ease-in-out">
         <span class="flex items-center gap-3">
          {{ bannerSectionData.BUTTONTOPTEXT }} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
         </span>
            <span class="text-xs">{{ bannerSectionData.BUTTONBOTTOMTEXT }}</span>
          </button>
      </nuxt-link>
         </div>

        </div>
    </div>
  </div>
</template>
<script setup>
import { bannerSectionData } from '~/api/constantData.js';
import { REFFEREL_LINK } from '~/utils';

</script>
<style>
  
</style>