import { useLocalStorage } from "@vueuse/core"

export const useUserStore = definePiniaStore('user-store', {
  state: () => {
    return {
      loggedIn: useLocalStorage('loggedIn', false),
      user: useLocalStorage('user', {}),
      keynoteAttended: useLocalStorage('keynoteAttended', false),
      session1Attended: useLocalStorage('session1Attended', false),
      session2Attended: useLocalStorage('session2Attended', false),
      altAttended: useLocalStorage('altAttended', false)
    }
  },
  getters: {},
  actions: {
    setUser(user) {
      this.user = user
      this.loggedIn = true
    },
    clearUser() {
      this.user = {}
      this.loggedIn = false
      this.keynoteAttended = false
      this.session1Attended = false
      this.session2Attended = false
      this.altAttended = false
    },
    updateKeynote() {
      this.keynoteAttended = true
    },
    updateSession1() {
      this.session1Attended = true
    },
    updateSession2() {
      this.session2Attended = true
    },
    updateAlt() {
      this.altAttended = true
    }
  },
})
