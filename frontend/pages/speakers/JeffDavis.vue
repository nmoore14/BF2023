<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <main class="flex col justify-center items-center w-full h-full my-1 px-2">
      <div
        class="flex col nowrap justify-center items-center w-full speaker-details"
      >
        <div
          class="flex col nowrap justify-center items-center w-full speaker-display"
        >
          <h1 class="brand text-center">Mr. Jeffrey W. Davis</h1>
          <img
            src="/images/speakers/DavisJeff_Pic.jpg"
            alt="Image of Mr. Jeffrey W. Davis"
          />
          <h2 class="title-info speaker-title">
            Business Development and Commercial Training Director
          </h2>
          <h2 class="sub-title-info speaker-company">
            Interplastic Corporation/North American Composites
          </h2>
        </div>
        <div class="speaker-content">
          <p class="body-text">
            Davis has held many executive positions throughout his 45-year
            career in the global composites business.
          </p>
          <p class="body-text">
            He is a native of the Columbus, Ohio area and holds a B.S. in
            Chemistry and Mathematics from Cumberland College, class of 1980. He
            earned his M.B.A. from The Ohio State University. Davis has held key
            executive management positions with Owens Corning, MA Hanna, CTG
            International and Interplastic Corporation/ North American
            Composites. He has served on the board of the American Composites
            Manufacturers Association located in Washington, D.C., and
            frequently spent many hours lobbying in the House of Representatives
            and Senate.
          </p>
          <p class="body-text">
            Davis has held key roles in many areas of business, including
            acquisitions, manufacturing, product development, global commercial
            experience, and chemical distribution. One of his projects included
            the use of fiberglass composites in uranium enrichment in
            coordination with the US Government and the Oak Ridge National
            Laboratory.
          </p>
          <p class="body-text">
            Davis and his wife Ramona, also a Cumberland College graduate,
            reside in Corbin, Kentucky. They are blessed with 10 grandchildren.
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
