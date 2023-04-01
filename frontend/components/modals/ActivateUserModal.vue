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
        v-if="!userDidActivate"
      >
        <h2
          class="activated-user-title"
          v-if="activatedUser"
        >
          User already activated
        </h2>
        <input
          type="text"
          name="student_id"
          id="student-id"
          class="text-input"
          :class="[validUser && !activatedUser ? 'valid-input' : '']"
          placeholder="Student ID #"
          v-model="studentId"
          @blur="findValidUser"
        />
        <input
          type="password"
          name="new_password"
          id="new-password"
          class="text-input"
          placeholder="Enter New Password"
          v-model="password"
        />
        <input
          type="password"
          name="confirm-new-password"
          class="text-input"
          id="confirm-new-password"
          placeholder="Confirm New Password"
          v-model="passwordConfirm"
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
            :class="[
              confirmPassword && !activatedUser
                ? 'btn-secondary'
                : 'btn-primary-disabled',
            ]"
            :disabled="confirmPassword && !activatedUser ? false : true"
            @click="userValidate"
          >
            Activate
          </button>
        </div>
      </div>
      <div
        class="flex col justify-around items-center h-full"
        v-if="userDidActivate"
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
const emit = defineEmits(['userActivated', 'closeModal'])

const validUser = ref(null)
const checkingValid = ref(false)
const activatedUser = ref(false)
const userDidActivate = ref(false)

const studentId = ref(null)
const password = ref(null)
const passwordConfirm = ref(null)

const closeModal = () => {
  emit('closeModal')
}

const resetForm = () => {
  studentId.value = null
  password.value = null
  passwordConfirm.value = null
  activatedUser.value = false
}

const confirmPassword = computed(() => {
  return password.value && passwordConfirm.value === password.value
})

const findValidUser = async () => {
  checkingValid.value = !checkingValid.value
  await fetch('http://localhost/api/index.php/user/findValid/', {
    method: 'POST',
    body: JSON.stringify({ studentId: studentId.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data[0] != 'error') {
        activatedUser.value = parseInt(data[0].activated)
        validUser.value = true
      } else {
        validUser.value = false
      }
    })
}

const userValidate = async () => {
  checkingValid.value = !checkingValid.value
  const studentData = { studentId: studentId.value, password: password.value }
  await fetch('http://localhost/api/index.php/user/activate/', {
    method: 'POST',
    body: JSON.stringify(studentData),
  })
    .then((response) => response.json())
    .then((data) => {
      userDidActivate.value = data.activated
      if (validUser.value) {
        setTimeout(() => {
          emit('userActivated')
        }, 5000)
      }
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
