<template>
  <div class="flex col justify-center items-center w-full hero">
    <h2 class="hero-sub-title">
      14th Annual Business Forum for Young Professionals
    </h2>
    <h1 class="hero-title">
      Equipping & Empowering Tomorrow's Leaders
    </h1>
    <div class="flex row my-1 hero-btns">
      <button class="btn btn-primary-ghost">Learn More</button>
      <button class="btn btn-primary">Register</button>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  height: 25rem;
  background-color: $uc-red;
  overflow: hidden;
  background-image: url("/images/conference-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-img {
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-title {
  font-family: $font;
  font-size: 2.5rem;
  font-weight: bolder;
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
