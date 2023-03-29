<template>
  <div class="flex col justify-center items-center modal-overlay">
    <div class="flex col nowrap justify-start items-center modal">
      <div class="flex col justify-start items-end w-full close">
        <i class="pi pi-times"></i>
      </div>
      <div class="flex col justify-center items-center w-full activate-inputs">
        <input
          type="text"
          name="student_id"
          id="student-id"
          class="text-input"
          :class="[validUser ? 'valid-input' : '']"
          placeholder="Student ID #"
          v-model="studentId"
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
          <button class="btn btn-outline-warning" @click="resetForm">Clear</button>
          <button
            class="btn"
            :class="[confirmPassword ? 'btn-secondary' : 'btn-primary-disabled']"
            :disabled="!confirmPassword"
            @click="userValidate"
          >
            Activate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['userActivated'])

const validUser = ref(null)
const checkingValid = ref(false)

const studentId = ref(null)
const password = ref(null)
const passwordConfirm = ref(null)

const resetForm = () => {
  studentId.value = null
  password.value = null
  passwordConfirm.value = null
}

const confirmPassword = computed(() => {
  return password.value && (passwordConfirm.value === password.value)
});

const userValidate = async () => {
  checkingValid.value = !checkingValid.value
  const studentData = { studentId: studentId.value, password: password.value }
  await fetch('http://localhost/api/index.php/user/checkValid/', {
    method: 'POST',
    body: JSON.stringify(studentData),
  })
    .then((response) => response.json())
    .then((data) => {
      validUser.value = data.valid
      if (validUser.value) {
        emit('userActivated')
      }
    }).catch((error) => {
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
  cursor: pointer;
  margin-top: -2rem;
  margin-right: -2rem;
}

.close > i {
  background-color: $uc-red;
  color: $gray-200;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 10rem;
}

.activate-inputs {
  padding: 1rem 5rem;
}
</style>
