<template>
  <div class="flex col justify-end items-center w-full hero">
    <div class="gradient-bg"></div>
    <h2 class="hero-sub-title">
      14th Annual Business Forum for Young Professionals
    </h2>
    <h1 class="hero-title">
      Equipping & Empowering Tomorrow's Leaders
    </h1>
    <div class="flex row my-1 hero-btns">
      <button class="btn btn-primary-ghost" v-on:click="linkPage('forum')">Learn More</button>
      <button class="btn btn-primary" v-on:click="linkPage('loginRegister')">Register</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    linkPage(page: string) {
      this.$router.push(`/${page}`);
    }
  }
}
</script>

<style lang="scss">
.gradient-bg {
  position: absolute;
  background: linear-gradient(to top, $uc-blue, rgba(255, 255, 255, 0.0));
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero {
  height: 25rem;
  margin-top: 0;
  margin-left: 0;
  background-color: $uc-red;
  overflow: hidden;
  background-image: url("/images/conference-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-title {
  font-family: $font;
  font-size: 2.5rem;
  font-weight: 300;
  color: $gray-200;
  z-index: 1;
}

.hero-sub-title {
  font-family: $font;
  font-size: 1.5rem;
  font-style: italic;
  color: $gray-200;
  z-index: 1;
}

.hero-btns {
  z-index: 1;
}
</style>
