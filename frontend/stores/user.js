export const useUserStore = definePiniaStore('user-store', {
  state: () => {
    return {
      user: {},
    }
  },
  getters: {},
  actions: {
    setUser(user) {
      this.user = user
    }
  },
})
