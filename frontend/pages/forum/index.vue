<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <main class="flex col justify-center items-center w-full my-1 px-2">
      <div class="page-title">
        <img
          src="/images/BusinessForumLogo_No_Date_Blck625.png"
          alt="Business forum logo"
        />
      </div>
      <div class="page-content">
        <p class="body-text">
          The Hutton School of Business at University of the Cumberlands
          maintains an innovative stance in providing cutting edge educational
          service to its students. We believe that success is defined by how
          well we extend the range of possibilities for our students. At the
          Hutton School of Business, we strive to provide an environment that
          encourages and recognizes innovation and creativity in the education
          of business students. It is with this overarching goal in mind that
          the Business Forum for Young Professionals was created.
        </p>
        <p class="body-text">
          The Business Forum for Young Professionals was developed through a
          gift and at the impetus of a UC trustee (Mr. J. Hunt Perkins). Each
          April since 2009, the Hutton School of Business hosts four highly
          successful professionals from all areas of business. Previous speakers
          have included Presidents and CEOs of international corporations,
          entrepreneurs, systems analysts, CPAs, and attorneys. The diversity of
          the speakers reflects the requests of students and recommendations for
          topics and professionals. The theme for each Business Forum has been
          based on Recognizing Business Opportunities in any Economic
          Environment.
        </p>
        <p class="body-text">
          The Business Forum is a simulated professional business conference
          designed to prepare young professionals as they enter the business
          workforce. The speakers make their presentations at two sessions which
          last 45 minutes including 10 minutes for questions. Since 2022, we
          have added a Keynote Session to open Forum. As with any professional
          conference, the students are required to pre-register choosing which
          sessions to attend.
        </p>
        <p class="body-text">
          On the morning of Forum, students arrive at the Registration Center in
          professional dress to receive their conference materials. Students not
          only attend Forum sessions but critique each session’s value as part
          of their educational experience. They are encouraged to ask questions
          and engage the speakers in dialogues. As a component of their business
          classes, each student is required to reflect on the sessions they
          attended and consider the relevance to their chosen profession.
        </p>
        <p class="body-text">
          Each year more than 150 students attend the Business Forum. The
          students who attend the presentations have been impressed not only
          with the speakers’ business expertise but with their commitment to
          serving others. In the thirteen years of Business Forum, more than
          2,500 Cumberlands students have had the opportunity to network with
          more than 50 successful business people who are willing to share their
          professional experiences.
        </p>
        <p class="body-text">
          Students can not only hear the speakers but interact with them in
          social situations. The members of our business honors society, Sigma
          Beta Delta, serve as hosts for a dinner with the speakers the evening
          before Forum. On the day of Forum, SBD members, along with our
          Business Club and department upper-class students, also serve as hosts
          for a luncheon honoring our speakers. Additionally, each speaker is
          assigned a student host during Forum.
        </p>
        <p class="body-text">
          All Hutton School of Business students attend Forum from freshman to
          senior year. Each year upperclassmen begin talking about how much they
          are looking forward to Forum and sharing their experiences with the
          underclassmen. Student benefits from Business Forum include:
        </p>
        <ul class="body-list">
          <li class="body-text body-list-item">
            Shaping of the student’s professional development
          </li>
          <li class="body-text body-list-item">
            Expansion of the knowledge of various professional fields and
            available opportunities
          </li>
          <li class="body-text body-list-item">
            Exposure to a wealth of professional knowledge and experience
          </li>
          <li class="body-text body-list-item">
            Creation of networking opportunities
          </li>
        </ul>
        <p class="body-text">
          We are excited to have the opportunity to host this year’s event. We
          had to cancel in 2020, had a much smaller scale event in 2021, resumed
          in-person attendance for the full event in 2022 and seem to be back to
          “normal” for 2023. We look forward to successful presentations and
          can’t wait to hear the student reviews.
        </p>
        <p class="body-text">
          Thank you for attending this year’s Business Forum for Young
          Professionals!
        </p>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page {
  background-color: $off-white;
  padding-left: 4rem;
  padding-right: 4rem;
}

main {
  padding: 2rem 0;
  background-color: white;
}

.page-title {
  width: 40rem;
}

.page-title img {
  width: 100%;
  height: auto;
}

.page-content p {
  margin-bottom: 0.75rem;
}

.body-list {
  margin-bottom: 0.75rem;
  padding-left: 4rem;
}

.body-list-item {
  list-style-type: disc;
}

@media only screen and (max-width: 714px) {
  .page {
    padding: 0;
  }

  .page-title {
    width: 20rem;
  }

  .body-list {
      padding-left: 2rem;
    }
}
</style>
