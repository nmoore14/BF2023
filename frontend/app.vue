<template>
  <div class="flex col wrap justify-center items-center w-full h-full site">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import "primeicons/primeicons.css";
</script>

<style lang="scss">
.site {
  margin: 0;
  padding: 0;
}
</style>
