<template>
  <div class="bg-primary">
    <div class="max-w-[1170px] mx-auto px-6 py-8 text-center text-white">
        <h4>{{ footerSectionData.COPY }}</h4>
         <nuxt-link class="mx-1 hover:underline" v-for="menu in footerSectionData.MENUS" :key="menu.id" :to="menu.link">{{ menu.name }}</nuxt-link>
        <h4 class="text-lg mt-3 font-semibold">{{ footerSectionData.TITLE }}</h4>
        <p>{{ footerSectionData.DESCRIPTION }}</p>
    </div>
  </div>
</template>
<script setup>
import { footerSectionData } from "~/api/constantData";
</script>
<style>
  
</style>