<template>
  <div class="flex col nowrap justify-center items-center speaker-card">
    <div class="speaker-img">
      <img :src=picture alt="Picture of {{ name }}"  />
    </div>
    <div class="flex col nowrap justify-center items-center speaker-content">
      <h1 class="title speaker-name-info">{{ name }}</h1>
      <h2 class="speaker-title-info">{{ title }}</h2>
      <h2 class="speaker-company-info">{{ company }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  title: String,
  company: String,
  picture: String,
});
</script>

<style lang="scss">
.speaker-card {
  background-color: $off-white;
  padding: 0.75rem 1rem;
  width: 25rem;
  min-height: 14rem;
  border-radius: .5rem;
}

.speaker-img {
  margin-top: -3rem;
  width: 8rem;
  height: 8rem;
  border-radius: 5rem;
  border: solid $uc-red 4px;
  overflow: hidden;
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
}

.speaker-img img {
  width: 100%;
  height: auto;
}

.speaker-name-info {
  text-align: center;
}

.speaker-title-info {
  font-family: $font;
  font-weight: 300;
  font-size: 1.25rem;
  text-align: center;
  color: $uc-blue;
  margin-bottom: .5rem;
}

.speaker-company-info {
  font-family: $font;
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
}

@media only screen and (max-width: 714px) {
  .speaker-title-info {
    text-align: center;
  }
}
</style>
