<template>
  <div class="fixed top-0 left-0 bg-white w-full shadow-md">
    <div class="max-w-[1170px] mx-auto px-6 py-1 grid md:grid-cols-3 items-center gap-5">
        <div class="col-span-1">
          <nuxt-link :to="REFFEREL_LINK" target="_blank">
            <h2 class="hading md:text-4xl text-xl text-center md:text-left font-oswald text-primary"><strong>SUGAR DEFENDER</strong></h2>
          </nuxt-link>
        </div>
        <div class="col-span-2 hidden md:flex gap-10 items-center justify-end">
            <div class="flex gap-10">
              <nuxt-link v-for="menu in headerMenus.MENUS" :key="menu.id" style="font-weight: 400;" class="text-[25px] px-5 py-1 hover:bg-[#FAF089] font-oswald text-primary hover:scale-105 transition duration-500 ease-in-out flex items-center gap-2 group" :to="menu.link" target="_blank">{{ menu.name }}
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 hidden group-hover:flex transition duration-500 ease-in-out">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg> -->
              </nuxt-link>
            </div>
            <div>
          <nuxt-link :to="REFFEREL_LINK" target="_blank">
            <button class="px-5 py-3  bg-primary text-white text-xl font-semibold flex items-center gap-3 rounded-3xl border-2 border-black hover:scale-110 transition duration-500 ease-in-out">Order Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
          </nuxt-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import { headerMenus } from '~/api/constantData';
import { REFFEREL_LINK } from '~/utils';

</script>
<style scoped>
  .hading{
    font-size: 40px;
    font-weight: 900 !important;
  }
</style>