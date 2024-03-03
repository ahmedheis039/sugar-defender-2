<template>
  <div>
<input type="checkbox" :id="showModal" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box p-0">
    <form method="dialog">
      <label :for="showModal" class="btn btn-sm btn-circle btn-white absolute right-2 top-2">✕</label>
    </form>
    <nuxt-link :to="REFFEREL_LINK" target="_blank">
      <img :src="POP_UP_IMAGE" alt="">
    </nuxt-link>
  </div>
</div>
  </div>
</template>
<script setup>
defineProps(['showModal'])
</script>
<style>
  
</style>