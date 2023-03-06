<template>
  <div class="fixed flex row w-full justify-between header">
    <div class="brand">
      <NuxtLink class="link-item brand" to="/">
        <img src="/images/Red-Black.png" alt="University of the Cumberlands Hutton School of Business Logo">
      </NuxtLink>
    </div>
    <div>
      <!-- Empty to div for layout purposes -->
    </div>
    <nav class="flex row justify-center items-center">
      <ul class="flex row w-full justify-center items-center">
        <li>
          <NuxtLink class="link-item" to="/forum">The Forum</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-item" to="/speakers">Speakers</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-item" to="/faq">FAQ</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-item-cta" to="/loginRegister">Login/Register</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.header {
  background-color: $off-white;
  z-index: 999;
}

.brand {
  padding: .25rem .5rem;
}

.brand > img {
  width: 12rem;
  height: auto;
}

li {
  list-style-type: none;
  padding: 1rem;
}

.link-item {
  text-decoration: none;
  color: $uc-blue;
  font-family: $font;
}

.link-item-cta {
  text-decoration: none;
  font-family: $font;
  background-color: $uc-blue;
  color: $gray-200;
  padding: .5rem .75rem;
  border-radius: .25rem;
}
</style>
