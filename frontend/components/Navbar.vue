<template>
  <div class="fixed flex row w-full justify-between header">
    <div class="brand">
      <NuxtLink class="link-item brand" to="/">
        <img
          src="/images/Red-Black.png"
          alt="University of the Cumberlands Hutton School of Business Logo"
        />
      </NuxtLink>
    </div>
    <div class="flex column justify-center items-center md-hidden nav-toggle">
      <button @click="toggleNav" class="btn btn-primary">
        <i class="pi pi-bars"></i>
      </button>
    </div>
    <nav class="flex row justify-center items-center">
      <ul class="flex row w-full justify-center items-center sm-hidden">
        <li>
          <NuxtLink class="link-item" to="/forum" active-class="nav-active">The Forum</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-item" to="/speakers" active-class="nav-active">Speakers</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-item" to="/faq" active-class="nav-active">FAQ</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-item-cta" to="/loginRegister"
            >Login/Register</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <div
      :class="showMenu ? 'nav-bg-active' : ''"
      class="absolute mobile-nav-bg"
      @click="showMenu = false"
    >
    </div>
    <nav
      :class="showMenu ? 'mobile-nav-active' : ''"
      class="absolute flex col justify-start items-end mobile-nav"
    >
      <ul class="flex col justify-start items-end md-hidden mobile-nav-items">
        <li>
          <NuxtLink class="link-item-mobile-brand" to="/">
            <img
              src="/images/Business Forum Logo_No_Date_Blck625.png"
              alt="Business forum logo"
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-item-mobile" to="/forum" @click="hideMenu"
            >The Forum</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="link-item-mobile" to="/speakers" @click="hideMenu"
            >Speakers</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="link-item-mobile" to="/faq" @click="hideMenu"
            >FAQ</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="link-item-mobile-cta"
            to="/loginRegister"
            @click="hideMenu"
            >Login/Register</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    let showMenu = ref(false);

    const toggleNav = () => {
      showMenu.value = !showMenu.value;
    };

    const hideMenu = () => {
      showMenu.value = false;
    };

    return {
      showMenu,
      toggleNav,
      hideMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  left: 0;
  background-color: $off-white;
  z-index: 999;
}

.brand {
  padding: 0.25rem 0.5rem;
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
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
}

.nav-active {
  background-color: $uc-maroon;
  color: $gray-200;
  padding: .25rem .5rem;
  border-radius: .25rem;
}
</style>
