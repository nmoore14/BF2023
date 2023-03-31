export const useUserStore = definePiniaStore('user-store', {
  state: () => {
    return {
      loggedIn: false,
      user: {},
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
