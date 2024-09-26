import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set) => ({
      userPreferences: null,
      setUserPreferences: (preferences) => set({ userPreferences: preferences }),
    }),
    {
      name: 'user-preferences-storage',
      getStorage: () => localStorage,
    }
  )
)

export default useUserStore