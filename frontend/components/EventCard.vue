<template>
  <div class="flex col justify-start items-center nowrap p-1 event-card">
    <div class="card-header">
      <h1 class="title card-title">{{ title }}</h1>
    </div>
    <div class="card-content">
      <p class="body-info">{{ startTime }} - {{ endTime }}</p>
      <h2 class="title-info">{{ location }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  startTime: String,
  endTime: String,
  title: String,
  location: String,
});
</script>

<style lang="scss" scoped>
.event-card {
  background-color: $off-white;
  min-height: 20rem;
  min-width: 15rem;
  max-width: 20rem;
  border-radius: 0.25rem;
}

.card-header {
  width: 100%;
  border-bottom: solid $uc-red 4px;
  border-radius: .15rem;
}

.card-title {
  text-align: center;
  font-size: 1.75rem;
}

.body-info,
.title-info {
  width: 100%;
  text-align: center;
}
</style>
