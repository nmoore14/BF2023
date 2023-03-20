<template>
  <div class="flex col justify-center items-center w-full h-full page">
    <Hero />
    <main class="w-full flex col justify-center items-center my-1 content">
      <ForumCard />
      <div class="flex row wrap justify-center items-center w-full my-1 p-1 event-cards">
        <h1 class="w-full title event-section-title">Events</h1>
        <button class="btn btn-primary" @click="users()">Get Users</button>
        <template v-if="viewingUser">
          <h2>{{ users }}</h2>
        </template>
        <EventCard
          v-for="event in Events"
          :startTime=event.startTime
          :endTime=event.endTime
          :title=event.title
          :location=event.location
        />
      </div>
      <Sponsors />
    </main>
  </div>
</template>

<script setup lang="ts">
  const viewingUser = ref(false)

  const users  = async() => {
    await useFetch('http://nmoore70709.ksshosting.com/api/index.php/user/get/', {
      onResponse({ response }) {
        console.log(response._data[0])
        viewingUser.value = true
        return response._data[0]
      }
    })
  }

  const Events = [
    {
      startTime: "8:00",
      endTime: "9:15",
      title: "Registration",
      location: "Hutton School of Business"
    },
    {
      startTime: "9:30",
      endTime: "10:15",
      title: "Keynote/Opening Session",
      location: "Kohn Theatre"
    },   
    {
      startTime: "10:30",
      endTime: "11:15",
      title: "Session 1",
      location: "Hutton School of Business"
    },
    {
      startTime: "11:30",
      endTime: "12:15",
      title: "Session 2",
      location: "Hutton School of Business"
    },
    {
      startTime: "12:15",
      endTime: "12:30",
      title: "Additional Meet & Greet",
      location: "Hutton School of Business"
    },

  ]
</script>

<style lang="scss" scoped>
.event-section-title {
  text-align: center;
}

.event-cards {
  gap: .5rem;
}
</style>
