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
// const showModal = ref('modal')

const showModal = ref(false); // Initialize showModal as false

// Use the mounted hook to open the modal after 5 seconds



// Use the mounted hook to open the modal after 5 seconds
onMounted(() => {
  setTimeout(() => {
    showModal.value = true;

    // Simulate a click on the button
    const button = document.querySelector('.btn');
    if (button) {
      button.click();
    }
  }, 3000); // 3000 milliseconds = 3 seconds
});

// Use a watcher to hide the label when showModal is true
watchEffect(() => {
  if (showModal.value) {
    // If showModal is true, hide the label
    const button = document.querySelector('.btn');
    if (button) {
      button.style.display = 'none';
    }
  }
});

</script>
<style>
  
</style>