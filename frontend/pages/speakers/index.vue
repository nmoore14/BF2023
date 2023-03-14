<template>
  <div class="flex col justify-center items-center w-full h-screen page">
    <main class="flex col justify-center items-center w-full h-full my-1 px-2">
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
const Speakers = [
  {
    name: "Mr. Joe Craft",
    title: "Chairman, President and CEO",
    company: "Alliance Resource Partners, LP",
    picture: "/images/speakers/Craft, Joe Pic.jpg",
    link: "/speakers/JoeCraft"
  },
  {
    name: "Mr. David Hubbard",
    title: "Chief of Legislative, State and Local Affairs",
    company: "National Security Agency",
    picture: "/images/speakers/Hubbard, David Pic.jpeg",
  },
  {
    name: "Ms. Barbara Johnston",
    title: "Creative Director",
    company: "IDEA Johnston",
    picture: "/images/speakers/Johnston, Barbara Pic.jpg",
  },
  {
    name: "Mr. Charles Reed",
    title: "President",
    company: "Reed Enterprises, Inc.",
    picture: "/images/speakers/Reed, Charles.jpg",
  },
  {
    name: "Mr. Jeffrey W. Davis",
    title: "Business Development and Commercial Training Director",
    company: "Interplastic Corporation/North American Composites",
    picture: "/images/speakers/Davis, Jeff Pic.jpg",
  },
];
</script>

<style lang="scss" scoped>
.speakers {
  margin-top: -5rem;
  column-gap: 1.5rem;
  row-gap: 4rem;
}
</style>
