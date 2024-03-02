<template>
  <div>
<input type="checkbox" :id="showModal" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box p-0">
    <img :src="POP_UP_IMAGE" alt="">
  </div>
  <label class="modal-backdrop" :for="showModal">Close</label>
</div>
  </div>
</template>
<script setup>
defineProps(['showModal'])
</script>
<style>
  
</style>