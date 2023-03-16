<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <main class="flex col justify-center items-center w-full h-full my-1 px-2">
      <div
        class="flex col nowrap justify-center items-center w-full speaker-details"
      >
        <div
          class="flex col nowrap justify-center items-center w-full speaker-display"
        >
          <h1 class="brand text-center">Mr. David Hubbard</h1>
          <img
            src="/images/speakers/Hubbard, David Pic.jpeg"
            alt="Image of Mr. David Hubbard"
          />
          <h2 class="title-info speaker-title">
            Chief of Legislative, State, and Local Affairs
          </h2>
          <h2 class="sub-title-info speaker-company">
            National Security Agency (NSA)
          </h2>
        </div>
        <div class="speaker-content">
          <p class="body-text">
            Mr. Hubbard and the members of his organization lead NSA’s
            interactions with the members and staff of the U.S. Senate and House
            of Representatives, and are responsible for developing, promoting,
            and facilitating strategic alliances with state, local, and
            community leaders.
          </p>
          <p class="body-text">
            Mr. Hubbard attended the University of the Cumberlands and graduated
            from the University of Kentucky in 1985 with a Bachelor of Science
            degree majoring in Computer Science.
          </p>
          <p class="body-text">
            Mr. Hubbard joined NSA in 1985 and spent his early years in the
            former National Computer Security Center, where he evaluated
            national security information systems. In the late 1980’s, he worked
            in the Research Directorate, where he developed software for NSA. In
            the early 1990’s, Mr. Hubbard moved to the Operations Directorate,
            where he was a team chief responsible for the development and
            deployment of fielded systems. In the mid-1990’s, Mr. Hubbard served
            in a variety of program management, technical, and managerial
            positions. From 2000-2001, Mr. Hubbard was a program manager at
            Microsoft Corporation in Redmond, WA, before returning to NSA in
            September 2001 to work in several positions in the NSA Commercial
            Solutions Center. Prior to his current assignment, Mr. Hubbard was
            the Chief of the Commercial Engagement Center. In this position, Mr.
            Hubbard oversaw the establishment and management of NSA’s engagement
            with industry that delivers technical and cybersecurity solutions
            for Agency customers.
          </p>
          <p class="body-text">
            In addition to receiving several awards while at NSA, Mr. Hubbard
            also holds a patent for an invention developed while employed at
            Microsoft. He is also the recipient of a Meritorious Presidential
            Rank Award and the NSA Meritorious Civilian Service Award.
          </p>
          <p class="body-text">
            Mr. Hubbard currently resides in Annapolis, Maryland.
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
