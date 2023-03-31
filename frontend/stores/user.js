import { useLocalStorage } from "@vueuse/core"

export const useUserStore = definePiniaStore('user-store', {
  state: () => {
    return {
      loggedIn: useLocalStorage('loggedIn', false),
      user: useLocalStorage('user', {}),
    }
  },
  getters: {},
  actions: {
    setUser(user) {
      this.user = user
      this.loggedIn = true
    }
  },
})
