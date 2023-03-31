<template>
  <div class="flex col justify-center items-center modal-overlay">
    <div class="flex col nowrap justify-start items-center modal">
      <div class="flex col justify-start items-end w-full close">
        <i
          class="pi pi-times"
          @click="closeModal()"
        ></i>
      </div>
      <div
        class="flex col justify-center items-center w-full activate-inputs"
        v-if="!loginSuccessful"
      >
        <h2 class="activated-user-title">Login</h2>
        <input
          type="text"
          name="student_id_login"
          id="student-id-login"
          class="text-input"
          placeholder="Student ID #"
          v-model="loginStudentId"
        />
        <input
          type="password"
          name="password_login"
          id="password-login"
          class="text-input"
          placeholder="Password"
          v-model="loginPassword"
        />
        <div
          class="flex row wrap w-full justify-between items-center mt-2 activate-btns"
        >
          <button
            class="btn btn-outline-warning"
            @click="resetForm"
          >
            Clear
          </button>
          <button
            class="btn"
            :class="[passwordLength ? 'btn-secondary' : 'btn-primary-disabled']"
            :disabled="!passwordLength"
            @click="userLogin"
          >
            Login
          </button>
        </div>
      </div>
      <div
        class="flex col justify-around items-center h-full"
        v-if="loginSuccessful"
      >
        <h1 class="success-title">Success!</h1>
        <i class="pi pi-check-circle success-icon"></i>
        <h2 class="success-sub-title">Welcome to the 2023 Business Forum</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '~/stores/user'

const emit = defineEmits(['userLoggedin', 'closeModal'])

const userStore = useUserStore()
const { setUser } = userStore

const loginSuccessful = ref(false)
const loginStudentId = ref(null)
const loginPassword = ref('')

const closeModal = () => {
  emit('closeModal')
}

const resetForm = () => {
  loginStudentId.value = null
  loginPassword.value = ''
}

const test = () => {
  console.log('fired')
}

const passwordLength = computed(() => {
  return loginPassword.value.length > 0
})

const userLogin = async () => {
  const studentData = {
    studentId: loginStudentId.value,
    password: loginPassword.value,
  }
  await fetch('http://localhost/api/index.php/user/login/', {
    method: 'POST',
    body: JSON.stringify(studentData),
  })
    .then((response) => response.json())
    .then((data) => {
      loginSuccessful.value = true
      setUser(data)
      setTimeout(() => {
        emit('userLoggedin')
      }, 5000)
    })
    .catch((error) => {
      console.error('ERROR: ', error)
    })
}
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  background-color: white;
  height: 20rem;
  width: 30rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 20px;
}

.close {
  margin-top: -2rem;
  margin-right: -2rem;
}

.close > i {
  cursor: pointer;
  background-color: $uc-red;
  color: $gray-200;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 10rem;
}

.activate-inputs {
  padding: 1rem 5rem;
}

.success-icon {
  font-size: 6rem;
  color: green;
}

@media only screen and (max-width: 714px) {
  .modal {
    width: 100%;
    height: 22rem;
    border-radius: 0;
  }

  .close {
    margin: 0;
    margin-top: -2rem;
    margin-bottom: 2rem;
  }

  .close > i {
    align-self: center;
  }
}
</style>
