<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <main class="flex col justify-center items-center w-full h-full my-1 px-2">
      <div
        class="flex col nowrap justify-center items-center w-full speaker-details"
      >
        <div
          class="flex col nowrap justify-center items-center w-full speaker-display"
        >
          <h1 class="brand text-center">Mr. Charles Reed</h1>
          <img
            src="/images/speakers/Reed, Charles.jpg"
            alt="Image of Mr. Charles Reed"
          />
          <h2 class="title-info speaker-title">President</h2>
          <h2 class="sub-title-info speaker-company">Reed Enterprises, Inc.</h2>
        </div>
        <div class="speaker-content">
          <p class="body-text">
            Charles Reed, a 1975 graduate of Cumberland College, was an
            exceptional student leader and athlete. He came to Williamsburg from
            Jenkins, KY, where he set school records in the long jump, triple
            jump and 180 hurdles, which he still holds today.
          </p>
          <p class="body-text">
            While a student at Cumberland, Reed was awarded the T.J. Roberts
            Campus Leadership Award, among other awards he received. He was the
            co-founder and first president of the Black Student Union at
            Cumberland. The Charles Reed Track and Academic Scholarship was
            established by Cumberland in his honor. Reed earned a bachelor’s
            degree in psychology from Cumberland in 1975, received the
            outstanding Alumni Award in 1979, and inducted into the UC Hall of
            Fame in 2012.
          </p>
          <p class="body-text">
            Upon graduation from Cumberland, Reed began a five-year career with
            Bethlehem Steel Corporation in Western, Pennsylvania, involving
            various management positions. In 1980, he moved to Denver, Colorado,
            and held several managerial positions with Arco International Oil
            and Gas Corporation. In 1993, Reed formed his own company and bought
            the exclusive franchise rights to Schlotzsky's in the cities of
            Plano, Allen, and Frisco, Texas. In 2014 after over 21 years owning
            and operating 7 locations, he sold the franchise and the real
            estate. He is now a semi-retired commercial real estate owner.
          </p>
          <p class="body-text">
            Reed served on many local boards such as Schlotzsky's Marketing
            Advisor Board, Equitable Bank Advisory Board of Directors, Girls,
            Inc. Advisory Board and Board of Directors, Black Executive Exchange
            Program Urban League, Midland Chamber of Commerce Advisory Board and
            the National Society of Black Engineers Region V Advisory Board. He
            served on the University of the Cumberlands Alumni Board of
            Directors from 1985-1988.
          </p>
          <p class="body-text">
            Reed is married to his grade school sweetheart and wife of 51 years,
            the former Clara Higgins, a 1975 alumna of Cumberland. She has
            earned a Master of Arts from the University of Pittsburgh, a Master
            of Divinity, and a doctoral degree in Theology from SMU. She is a
            retired Elder in the United Methodist Church, where she was the
            first Black female District Superintendent in the North Texas Annual
            Conference. Dr. Reed is also responsible for 260 pastors and 80
            churches. Charles and Clara have one child, Crystal, and one
            grandchild, Camryn.
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
