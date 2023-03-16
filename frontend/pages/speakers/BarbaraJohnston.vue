<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <main class="flex col justify-center items-center w-full h-full my-1 px-2">
      <div
        class="flex col nowrap justify-center items-center w-full speaker-details"
      >
        <div
          class="flex col nowrap justify-center items-center w-full speaker-display"
        >
          <h1 class="brand text-center">Ms. Barbara Johnston</h1>
          <img
            src="/images/speakers/Johnston, Barbara Pic.jpg"
            alt="Image of Ms. Barbara Johnston"
          />
          <h2 class="title-info speaker-title">Creative Director</h2>
          <h2 class="sub-title-info speaker-company">IDEA Johnston</h2>
        </div>
        <div class="speaker-content">
          <p class="body-text">
            Johnston has enjoyed a 35-year career in marketing. She has worked
            on the creative and business aspects of brand development, consumer
            packaging, and product launches.
          </p>
          <p class="body-text">
            Her clients have included M&M/Mars, Campbell's Soup, and HBO.
            Johnston has managed creative teams and developed quotes and
            timelines. She is also experienced at writing proposal responses.
          </p>
          <p class="body-text">
            Johnston is now invested in her ongoing projects for long-term
            clients—everything from pet salon products to legal symposium
            materials—while fixing up an old farmhouse with her husband, riding
            motorcycles, and taking in abandoned pets.
          </p>
          <p class="body-text">
            Most of all, she appreciates the opportunity to explore the truly
            beautiful state of Kentucky, where she now resides.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.speaker-details {
  padding: 1rem 2rem;
}

.speaker-display {
  margin-bottom: 2rem;
}

.speaker-display img {
  width: 20rem;
  height: auto;
}

.speaker-content p {
  margin-bottom: 1rem;
}

@media only screen and (max-width: 714px) {
  .speaker-details {
    padding: 1rem 0.5rem;
  }

  .speaker-display h2 {
    text-align: center;
  }
}
</style>
