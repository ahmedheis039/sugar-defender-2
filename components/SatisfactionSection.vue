<template>
  <div class="bg-primary">
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-10 items-center">
        <div class="col-span-1">
          <img :src="satisfactionSectionData.IMAGE" alt="">
        </div>
        <div class="col-span-2 text-white">
            <h2 class="text-4xl font-bold text-center" v-for="(title, ind) in satisfactionSectionData.TITLE" :key="ind">{{ title }}</h2>
            <p class="text-xl text-justify my-5" v-for="(description, ind) in satisfactionSectionData.DESCRIPTION" :key="ind">{{ description }}</p>
        </div>
    </div>
  </div>
</template>
<script setup>
import { satisfactionSectionData } from "~/api/constantData";
</script>
<style>
  
</style>