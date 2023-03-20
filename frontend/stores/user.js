export const useUserStore = definePiniaStore(
  'user-store',
  {
    state : () => (
      {
        user: [],
      }
    ),
    getters: {},
    actions: {},
  }
)
