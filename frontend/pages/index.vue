<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <Hero />
    <main class="w-full flex col justify-center items-center my-1 content">
      <ForumCard />
      <div
        class="flex row wrap justify-center items-center w-full my-1 p-1 event-cards"
      >
        <h1 class="w-full title event-section-title">Events</h1>
        <template v-if="!userStore.loggedIn">
          <EventCard
            v-for="event in baseEvents"
            :startTime="event.startTime"
            :endTime="event.endTime"
            :title="event.title"
            :location="event.location"
            :subLocation="event.subLocation"
            :link-open="event.linkOpen"
            :link-close="event.linkClose"
            :session-key="event.sessionKey"
            :attended="event.attended"
          />
        </template>
        <template v-if="userStore.loggedIn">
          <EventCard
            v-for="event in UserEvents"
            :startTime="event.startTime"
            :endTime="event.endTime"
            :title="event.title"
            :location="event.location"
            :subLocation="event.subLocation"
            :link-open="event.linkOpen"
            :link-close="event.linkClose"
            :session-key="event.sessionKey"
            :attended="event.attended"
          />
        </template>
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
const { user, loggedIn, keynoteAttended, session1Attended, session2Attended, altAttended } = storeToRefs(userStore);

const baseEvents = [
  {
    startTime: "8:00",
    endTime: "9:15",
    title: "Registration",
    location: "Grace Crum Rollins Lobby",
    subLocation: "",
    linkOpen: "",
    linkClose: "",
    sessionKey: "",
    attended: false,
  },
  {
    startTime: "9:30",
    endTime: "10:15",
    title: "Keynote/Opening Session",
    location: "Kohn Theatre",
    subLocation: "Grace Crum Rollins",
    linkOpen: "2023-04-01 00:00:00",
    linkClose: "2023-04-01 23:59:00",
    sessionKey: "keynote_attendance",
    attended: loggedIn.value ? keynoteAttended.value : false,
  },
  {
    startTime: "10:30",
    endTime: "11:15",
    title: "Session 1",
    location: "Hutton School of Business",
    subLocation: "",
    linkOpen: "2023-04-05 09:30:00",
    linkClose: "2023-04-05 09:30:00",
    sessionKey: "session1_attendance",
    attended: loggedIn.value ? session1Attended.value : false,
  },
  {
    startTime: "11:30",
    endTime: "12:15",
    title: "Session 2",
    location: "Hutton School of Business",
    subLocation: "",
    linkOpen: "2023-04-05 09:30:00",
    linkClose: "2023-04-05 09:30:00",
    sessionKey: "session2_attendance",
    attended: loggedIn.value ? session2Attended.value : false,
  },
  {
    startTime: "12:15",
    endTime: "12:30",
    title: "Additional Meet & Greet",
    location: "Hutton School of Business",
    subLocation: "",
    linkOpen: "2023-04-05 09:30:00",
    linkClose: "2023-04-05 09:30:00",
    sessionKey: "alt_attendance",
    attended: loggedIn.value ? altAttended.value : false,
  },
];

const UserEvents = ref([])


const setUserEvents = () => {
  if (parseInt(userStore.user[0].attending_keynote)) {
    UserEvents.value.push(baseEvents[1])
  }

  if (parseInt(userStore.user[0].session1_id) > 0) {
    UserEvents.value.push(baseEvents[2])
  }

  if (parseInt(userStore.user[0].session2_id) > 0) {
    UserEvents.value.push(baseEvents[3])
  }

  if (parseInt(userStore.user[0].alt_id)) {
    UserEvents.value.push(baseEvents[4])
  }
}

if(loggedIn.value) {
    setUserEvents()
}

watch(loggedIn, () => {
  if (!loggedIn.value) {
    UserEvents.value = []
  } else {
    setUserEvents()
  }
})
</script>

<style lang="scss" scoped>
.event-section-title {
  text-align: center;
}

.event-cards {
  gap: 0.5rem;
}
</style>
