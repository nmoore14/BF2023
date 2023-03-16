<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <main class="flex col justify-center items-center w-full h-full my-1 px-2">
      <div class="flex row wrap justify-center items-center w-full keynote-speakers">
        <SpeakerCard
          v-for="keynoteSpeaker in KeynoteSpeakers"
          :name="keynoteSpeaker.name"
          :title="keynoteSpeaker.title"
          :company="keynoteSpeaker.company"
          :picture="keynoteSpeaker.picture"
          :link="keynoteSpeaker.link"
        />
      </div>
      <div class="flex row wrap justify-center items-center w-full speakers">
        <SpeakerCard
          v-for="speaker in Speakers"
          :name="speaker.name"
          :title="speaker.title"
          :company="speaker.company"
          :picture="speaker.picture"
          :link="speaker.link"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const KeynoteSpeakers = [
  {
    name: "Mr. Joe Craft",
    title: "Chairman, President and CEO",
    company: "Alliance Resource Partners, LP",
    picture: "/images/speakers/CraftJoe_Pic.jpg",
    link: "/speakers/JoeCraft"
  },
]
const Speakers = [
  {
    name: "Mr. David Hubbard",
    title: "Chief of Legislative, State and Local Affairs",
    company: "National Security Agency",
    picture: "/images/speakers/HubbardDavid_Pic.jpeg",
    link: "/speakers/DavidHubbard"
  },
  {
    name: "Ms. Barbara Johnston",
    title: "Creative Director",
    company: "IDEA Johnston",
    picture: "/images/speakers/JohnstonBarbara_Pic.jpg",
    link: "/speakers/BarbaraJohnston"
  },
  {
    name: "Mr. Charles Reed",
    title: "President",
    company: "Reed Enterprises, Inc.",
    picture: "/images/speakers/ReedCharles.jpg",
    link: "/speakers/CharlesReed"
  },
  {
    name: "Mr. Jeffrey W. Davis",
    title: "Business Development and Commercial Training Director",
    company: "Interplastic Corporation/North American Composites",
    picture: "/images/speakers/DavisJeff_Pic.jpg",
    link: "/speakers/JeffDavis"
  },
];
</script>

<style lang="scss" scoped>
.keynote-speakers {
  margin-top: 4rem;
}

.speakers {
  margin-top: 4rem;
  column-gap: 1.5rem;
  row-gap: 4rem;
  padding: 0 24rem;
}

@media only screen and (max-width: 1400px) {
  .speakers {
    padding: 0 2rem;
  }
}

@media only screen and (max-width: 714px) {
  .page {
    margin-top: 8rem;
  }

  .keynote-speakers {
    margin-top: 1rem;
  }

  .speakers {
    row-gap: 4rem;
    padding: 0;
  }
}
</style>
