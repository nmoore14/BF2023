<template>
  <div
    class="flex col justify-center items-center w-full h-screen page-login-registration"
  >
    <main class="w-full flex col justify-center items-center my-1 px-2">
      <div
        class="flex row wrap justify-center items-center w-full login-register"
      >
        <div class="flex col nowrap justify-center items-center login">
          <h1 class="title">Log in</h1>
          <button
            class="btn btn-primary"
            @click="toggleShowActive()"
          >
            Activate Account
          </button>
          <button class="btn btn-primary">Log In</button>
        </div>
        <div class="flex col nowrap justify-center items-center register">
          <i class="fas fa-user-plus fa-5x"></i>
          <h2 class="title">Need to Register</h2>
          <p class="body-text">
            Click below to join the 2023 Business Forum for Young Professionals
          </p>
          <NuxtLink
            class="btn btn-primary-ghost-2 register-button"
            to="https://forms.office.com/Pages/ResponsePage.aspx?id=CPzRDz30G0y9DxepEopgpG3nmk7_2ydOpOrJoTtHpbZURTNaQUQ5VUpaN0oySFpUT1RFN0dLTUJLTi4u"
            target="_blank"
          >
            Register
          </NuxtLink>
        </div>
      </div>
    </main>
    <ActivateUserModal v-show="showActivateUser" @user-activated="toggleShowActive" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ActivateUserModal from '@/components/modals/ActivateUserModal.vue'

const showActivateUser = ref(false)

const toggleShowActive = () => {
  showActivateUser.value = !showActivateUser.value
}
</script>

<style lang="scss">
.page-login-registration {
  overflow: hidden;
}

/*Start Login Style*/
.login {
  background-color: $off-white;
  width: 50%;
  height: 26rem;
  border-radius: 10px 0 0 10px;
  text-align: center;
  padding: 1rem 2rem;
}

input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #eeeeef;
}

.login span {
  float: left;
}

.login a {
  float: right;
  text-decoration: none;
  color: #000;
  transition: 0.3s all ease-in-out;
}

.login a:hover {
  color: #9526a9;
  font-weight: bold;
}

.login button {
  width: 100%;
  margin-top: 1rem;
  padding: 10px;
  border: none;
  background-color: $uc-red;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}

.login button:hover {
  width: 97%;
  font-size: 22px;
  border-radius: 5px;
}

.login p {
  display: inline-block;
  margin: 0px 10px 30px;
}

.login ul {
  list-style: none;
  margin-bottom: 40px;
}

.login ul li {
  display: inline-block;
  margin-right: 30px;
  cursor: pointer;
}

.login ul li:hover {
  opacity: 0.6;
}

.login ul li:last-child {
  margin-right: 0;
}

.login .copyright {
  display: inline-block;
  float: none;
}

/*Start Register Style*/
.register {
  gap: 1rem;
  background-image: linear-gradient(135deg, $uc-dark-blue 5%, $uc-blue 95%);
  width: 50%;
  height: 26rem;
  color: $gray-200;
  border-radius: 0 10px 10px 0;
  padding: 100px 0;
}

.register-button {
  transition: 0.2s all ease-in-out;
}

.register-button:hover {
  color: $uc-blue;
  background-color: #fff;
  cursor: pointer;
  border-radius: 10rem;
}
</style>
