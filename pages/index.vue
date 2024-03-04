<template>
  <div>
    <label :for="showModal" class="btn hidden">open modal</label>
    <pop-up :showModal="showModal"/>
    <header-section />
    <BannerSection />
    <ReviewSection />
    <SeguarDefenderSection />
    <ProductSection />
    <BenifitSection />
    <BonousSection />
    <DefenderSection />
    <SatisfactionSection />
    <FaqSection />
    <FooterSection />

  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';

const showModal = ref(false);

onMounted(() => {
  setTimeout(() => {
    showModal.value = true;
    simulateButtonClick();
  }, 15000);   // 15,000 miliseconds = 15 sec

  // Show modal when leaving the site
  window.addEventListener('beforeunload', () => {
    showModal.value = true;
    simulateButtonClick();
  });
});

onBeforeUnmount(() => {
  // Clean up event listener when component is unmounted
  window.removeEventListener('beforeunload', () => {
    showModal.value = true;
    simulateButtonClick();
  });
});

watchEffect(() => {
  if (showModal.value) {
    const button = document.querySelector('.btn');
    if (button) {
      button.style.display = 'none';
    }
  }
});

function simulateButtonClick() {
  const button = document.querySelector('.btn');
  if (button) {
    button.click();
  }
}
</script>

<style>
  /* Add your styles here */
</style>