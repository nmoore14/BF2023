<template>
  <footer class="flex row wrap justify-between items-center w-full">
    <div class="footer-left">
      <NuxtLink class="link-item brand-footer" to="/">
        <img
          src="/images/Red-Black.png"
          alt="University of the Cumberlands Hutton School of Business Logo"
        />
      </NuxtLink>
    </div>
    <div class="footer-middle">
      <NuxtLink class="brand-footer" to="/">
        <img
          src="/images/Business Forum Logo_No_Date_Blck625.png"
          alt="Business forum logo"
        />
      </NuxtLink>
    </div>
    <div class="footer-right">
      <ul class="flex row wrap w-full justify-center items-center">
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
          <NuxtLink class="link-item-cta" to="/loginRegister"
            >Login/Register</NuxtLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  position: sticky;
  background-color: $gray-500;
  left: 0;
  bottom: 0;
  height: 6rem;
  z-index: 990;
}

.brand-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
}

.brand-footer > img {
  width: 12rem;
  height: auto;
}

li {
  list-style-type: none;
  padding: 1rem;
}

.link-item {
  text-decoration: none;
  color: $uc-red;
  font-family: $font;
}

.link-item-cta {
  text-decoration: none;
  font-family: $font;
  background-color: $uc-red;
  color: $gray-200;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
}
</style>
