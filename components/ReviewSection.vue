<template>
  <div>
     <div class="max-w-7xl mx-auto px-6 py-10 md:py-20">
        <h2 class="xl:text-5xl md:text-4xl text-3xl text-center text-primary font-bold">{{ reviewSectionData.TITLE }}</h2>

        <div>
          <ul class="md:flex mx-auto gap-10 my-16">
            <li 
            v-for="(image, ind) in reviewSectionData.IMAGES.slice(0,4)" 
            :key="ind"
            class="md:w-1/2 md:h-1/2 w-2/3 h-2/3 mx-auto my-5"
            >
              <div>
                <nuxt-link :to="REFFEREL_LINK">
                  <img class="rounded-full w-full h-full" :src="image" alt="">
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>

        <div v-for="review in reviewSectionData.REVIEWS" :key="review.id">
          <div class="grid md:grid-cols-4 grid-cols-1 md:gap-10 items-center my-5">
             <div class="my-5 w-full col-span-1">
            <div class="flex justify-center">
               <nuxt-link :to="REFFEREL_LINK">
                <img class="rounded-full" :src="review.img" alt="">
              </nuxt-link>
            </div>
              <div class="flex items-center justify-center gap-2 mt-5">
                <ul class="flex items-center" >
                              <li v-for="(rating, ind) in review.rating" :key="ind">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-buttonBG">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                              </svg>
                              </li>
                            </ul>
                            <p class="font-semibold">{{ review.verify }}</p>
              </div>
             </div>
             <div class="col-span-3 mt-5 md:mt-0">
              <p class="md:text-xl text-lg font-semibold text-justify">{{ review.description }}</p>
              <p class="font-bold md:text-2xl text-xl flex justify-end mt-5">{{ review.name }} - {{ review.address }}</p>
             </div>
          </div>
        </div>
     </div>
  </div>
</template>
<script setup>
import { reviewSectionData } from '~/api/constantData';
</script>
<style>
  
</style>