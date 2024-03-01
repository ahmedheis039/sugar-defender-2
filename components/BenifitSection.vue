<template>
  <div class="bg-primary">
    <div class="max-w-7xl mx-auto px-6 pt-20 pb-10">
       <div class="grid grid-cols-2 gap-5">
        <div>
            <img :src="benifitSectionData.IMAGE" alt="">
        </div>
        <div>
          <p class="text-2xl font-normal text-white my-5 text-justify" v-for="(description, ind) in benifitSectionData.DESCRIPTION1" :key="ind">{{ description }}</p>
        </div>
       </div>
       <div class="mt-10">
        <p class="text-2xl font-normal text-white my-5 text-justify" v-for="(description, ind) in benifitSectionData.DESCRIPTION2" :key="ind">{{ description }}</p>
       </div>
    </div>
  </div>
</template>
<script setup>
import { benifitSectionData } from "~/api/constantData";
</script>
<style>
  
</style>