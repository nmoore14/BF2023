<template>
  <div class="flex row w-full justify-between header">
    <div class="brand">
      <NuxtLink class="link-item title" to="/">Brand</NuxtLink>
    </div>
    <div>
      <!-- Empty to div for layout purposes -->
    </div>
    <nav class="flex row justify-center items-center">
      <ul class="flex row w-full justify-center items-center">
        <li><NuxtLink class="link-item" to="/forum">The Forum</NuxtLink></li>
        <li><NuxtLink class="link-item" to="/speakers">Speakers</NuxtLink></li>
        <li><NuxtLink class="link-item" to="/faq">FAQ</NuxtLink></li>
        <li><NuxtLink class="link-item-cta" to="/loginRegister">Login/Register</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
  .header {
    background-color: $uc-blue;
  }

  .brand {
    padding: .25rem .5rem;
  }

  li {
    list-style-type: none;
    padding: 1rem;
  }
  
  .link-item {
    text-decoration: none;
    color: $gray-200;
    font-family: $font;
  }

  .link-item-cta {
    text-decoration: none;
    font-family: $font;
    background-color: $gray-200;
    color: $uc-blue;
    padding: .5rem .75rem;
    border-radius: .25rem;
  }
</style>
