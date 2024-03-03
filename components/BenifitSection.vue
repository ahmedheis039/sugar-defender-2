<template>
  <div class="bg-primary">
    <div class="max-w-[1170px] mx-auto px-6 pt-10 md:pt-20 pb-10">
       <div class="grid md:grid-cols-2 gap-5">
        <div>
            <nuxt-link :to="REFFEREL_LINK" target="_blank">
              <img :src="benifitSectionData.IMAGE" alt="">
            </nuxt-link>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-white">{{ benifitSectionData.TITLE }}</h2>
          <p class="text-xl font-normal text-white my-5 text-justify" v-for="(description, ind) in benifitSectionData.DESCRIPTION1" :key="ind"><span class="font-bold">{{ description.title }} </span>{{ description.description }}</p>
        </div>
       </div>
       <div class="mt-10">
        <p class="text-xl font-normal text-white my-5 text-justify" v-for="(description, ind) in benifitSectionData.DESCRIPTION2" :key="ind"><span class="font-bold">{{ description.title }} </span>{{ description.description }}</p>
       </div>
    </div>
  </div>
</template>
<script setup>
import { benifitSectionData } from "~/api/constantData";
</script>
<style>
  
</style>