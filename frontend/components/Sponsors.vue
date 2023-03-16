<template>
  <div class="flex col w-full justify-center items-center p-1 sponsors">
    <div class="flex col w-full justify-center items-center sponsors-title">
      <h2 class="title">Sponsors</h2>
    </div>
    <div
      class="flex row wrap w-full justify-around items-center sponsors-content"
    >
      <div class="sponsor">
        <img
          class="sponsor-img-bf"
          src="/images/sponsors/BizzackFoundationLogo.png"
          alt="Bizzack Foundation Logo"
        />
      </div>
      <div class="sponsor">
        <a href="https://derbydistribution.net/" target="_blank">
          <img
            class="sponsor-img-ddl"
            src="/images/sponsors/DerbyDistributionLogo-KS.png"
            alt="Derby Distribution Logo"
          />
        </a>
      </div>
      <div class="sponsor">
        <a href="https://www.forchtbank.com" target="_blank">
          <img
            class="sponsor-img-fb"
            src="/images/sponsors/ForchtTransparent-KS.png"
            alt="Forcht Bank Logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sponsors {
  background-color: $off-white;
  border-radius: 0.25rem;
  gap: 1rem;
}

.sponsors-title {
  margin-bottom: 1rem;
}

.sponsor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 20rem;
}

.sponsor > a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sponsor-img-bf,
.sponsor-img-ddl {
  width: 100%;
}

.sponsor-img-fb {
  width: 10rem;
}
</style>
