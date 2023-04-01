<template>
  <div class="flex col justify-start items-center nowrap p-1 event-card">
    <div class="card-header">
      <h1 class="title card-title">{{ title }}</h1>
    </div>
    <div class="flex col nowrap justify-start items-center card-content">
      <p class="body-info">{{ startTime }} - {{ endTime }}</p>
      <h2 class="title-info">{{ location }}</h2>
      <h3 class="sub-title-info">{{ subLocation }}</h3>
      <div class="attend" v-if="linkActive && !checkedIn">
        <button class="btn btn-secondary" @click="submitAttendance">Mark Attendance</button>
      </div>
      <div class="attend" v-if="checkedIn">
        <i class="pi pi-check-circle attended-icon"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const { user, loggedIn } = storeToRefs(userStore);
const { updateKeynote, updateSession1, updateSession2, updateAlt } = userStore

const props = defineProps({
  startTime: String,
  endTime: String,
  title: String,
  location: String,
  subLocation: String,
  linkOpen: String,
  linkClose: String,
  sessionKey: String,
  attended: Boolean,
});

const linkActive = ref(false)
const checkedIn = ref(props.attended)

const linkCheck = () => {
  const current = new Date()
  const linkOpen = new Date(props.linkOpen)
  const linkClose = new Date(props.linkClose)

  if (loggedIn.value) {
    if (current >= linkOpen && current <= linkClose) {
        linkActive.value = true
        return
      }
  }

  linkActive.value = false
}

const submitAttendance = async() => {
  const studentData = { studentId: user.value[0].student_id, session: props.sessionKey }
  await fetch('http://localhost/api/index.php/user/attendance/', {
    method: 'POST',
    body: JSON.stringify(studentData)
  })
    .then((response) => response.json())
    .then((data) => {
      checkedIn.value = data.checkedIn
      if(data.checkedIn) {
        updateSessionStore(props.sessionKey)
      }
    }).catch((error) => {
      console.log('ERROR: ', error)
    })
}

const updateSessionStore = ($sessionKey) => {
  switch ($sessionKey) {
    case 'keynote_attendance':
      updateKeynote()
      break
    case 'session1_attendance':
      updateSession1()
      break
    case 'session2_attendance':
      updateSession2()
      break
    case 'alt_attendance':
      updateAlt()
      break
    default:
      break
  }
}

onMounted(() => {
    linkCheck()
    setInterval(() => {
      linkCheck()
    }, 300000);
  })
</script>

<style lang="scss" scoped>
.event-card {
  background-color: $off-white;
  min-height: 20rem;
  min-width: 15rem;
  max-width: 20rem;
  border-radius: 0.25rem;
}

.card-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid $uc-red 4px;
  border-radius: 0.15rem;
  min-height: 5rem;
}

.card-title {
  text-align: center;
  font-size: 1.75rem;
}

.body-info,
.title-info {
  width: 100%;
  text-align: center;
}

.attended-icon {
  margin-top: 1rem;
  font-size: 4rem;
  color: green;
}
</style>
