<template>
  <div>
     <div class="max-w-[1170px] mx-auto px-6 py-10">
          <h2 class="text-center text-3xl md:text-4xl font-bold">{{ faqSectionData.TITLE }}</h2>

          <div class="hs-accordion-group mt-10">
              <div v-for="accordian in faqSectionData.FAQS" :key="accordian.id" class="border border-gray-500 p-2 hs-accordion hs-accordion-active:border-gray-500 bg-white  rounded-xl my-2" id="hs-active-bordered-heading-one">
                <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full text-start text-black font-bold py-4 px-5 text-2xl" :aria-controls="accordian.id">
                  {{ accordian.title }}
                  <svg class="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    <svg class="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                  </button>
                <div :id="accordian.id" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one">
                  <div class="pb-4 px-5">
                    <p class="text-gray-800 text-lg md:text-xl">
                      {{ accordian.description }}
                    </p>
                  </div>
                </div>
              </div>
       </div>
  </div>
  </div>
</template>
<script setup>
import { faqSectionData } from '~/api/constantData';
</script>
<style>
  
</style>