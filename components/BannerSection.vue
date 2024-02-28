<template>
  <div class="bg-primary">
    <div class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-5">
        <div>
          <div class="xl:w-full md:w-[80%]">
            <img class="w-full h-full" :src="bannerSectionData.BANNERIMAGE" alt="">
          </div>

          <div class="mt-5 md:w-[80%]">
            <img class="w-full h-full" :src="bannerSectionData.BANNERFOOTERIMG" alt="">
          </div>
        </div>
        <div class="text-white">
          <h2 class="xl:text-4xl md:text-2xl font-bold">{{ bannerSectionData.HEADLINE }}</h2> 
          <p class="my-5 xl:text-xl md:text-sm py-5 tracking-wider border-b border-t">{{ bannerSectionData.DESCRIPTION }}</p>

          <h3 class="xl:text-3xl md:text-xl text-center font-bold">{{ bannerSectionData.REGPRICE }} - <span class="line-through">{{ bannerSectionData.REGPRICEVALUE }}</span></h3>
          <h3 class="xl:text-3xl md:text-xl text-center lg:mt-5 md:mt-3 font-bold">{{ bannerSectionData.TODAYOFFER }}</h3>

         <div class="text-center mt-10">
          <button class="md:px-10 px-6 py-3 bg-buttonBG text-black xl:text-xl md:text-md rounded-xl border border-black font-semibold">
            {{ bannerSectionData.BUTTONTOPTEXT }} <br>
            <span class="text-xs">{{ bannerSectionData.BUTTONBOTTOMTEXT }}</span>
          </button>
         </div>

        </div>
    </div>
  </div>
</template>
<script setup>
import {bannerSectionData} from '~/api/constantData.js'

</script>
<style>
  
</style>