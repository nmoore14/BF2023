<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <Hero />
    <main class="w-full flex col justify-center items-center my-1 content">
      <ForumCard />
      <div
        class="flex row wrap justify-center items-center w-full my-1 p-1 event-cards"
      >
        <h1 class="w-full title event-section-title">Events</h1>
        <EventCard
          v-for="event in Events"
          :startTime="event.startTime"
          :endTime="event.endTime"
          :title="event.title"
          :location="event.location"
          :subLocation="event.subLocation"
          :link="event.link"
        />
      </div>
      <Sponsors />
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const { user, loggedIn } = storeToRefs(userStore);

const baseEvents = [
  {
    startTime: "8:00",
    endTime: "9:15",
    title: "Registration",
    location: "Grace Crum Rollins Lobby",
    subLocation: "",
    link: "https://www.google.com",
  },
  {
    startTime: "9:30",
    endTime: "10:15",
    title: "Keynote/Opening Session",
    location: "Kohn Theatre",
    subLocation: "Grace Crum Rollins",
    link: "https://www.google.com",
  },
  {
    startTime: "10:30",
    endTime: "11:15",
    title: "Session 1",
    location: "Hutton School of Business",
    subLocation: "",
    link: "https://www.google.com",
  },
  {
    startTime: "11:30",
    endTime: "12:15",
    title: "Session 2",
    location: "Hutton School of Business",
    subLocation: "",
    link: "https://www.google.com",
  },
  {
    startTime: "12:15",
    endTime: "12:30",
    title: "Additional Meet & Greet",
    location: "Hutton School of Business",
    subLocation: "",
    link: "https://www.google.com",
  },
];

const Events = userStore.loggedIn ? [] : baseEvents;

if (userStore.loggedIn) {
  console.log(userStore.user[0])
  
  if (parseInt(userStore.user[0].attending_keynote)) {
    Events.push(baseEvents[1])
  }

  if (parseInt(userStore.user[0].session1_id) > 0) {
    Events.push(baseEvents[2])
  }

  if (parseInt(userStore.user[0].session2_id) > 0) {
    Events.push(baseEvents[3])
  }

  if (parseInt(userStore.user[0].alt_id)) {
    Events.push(baseEvents[4])
  }
}
</script>

<style lang="scss" scoped>
.event-section-title {
  text-align: center;
}

.event-cards {
  gap: 0.5rem;
}
</style>
