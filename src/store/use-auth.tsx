import axiosInstance from '@/config/axios-instance'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface IAuthStore {
  token: string | null | undefined
  setToken: (token: string | null | undefined) => void
  user: any | null
  setUser: (user: any) => void
  login: ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => Promise<any>
  logout: () => void
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string | null | undefined) => set({ token }),
      user: null,
      setUser: (user: any) => set({ user }),
      login: async ({ email, password }) => {
        const response = await axiosInstance.post('/v1/auth/login', {
          email,
          password,
        })
        const { token, user } = response.data
        set({
          token,
          user,
        })
      },
      logout: () => {
        set({
          token: null,
          user: null,
        })
      },
    }),
    {
      name: 'auth',
    }
  )
)

export default useAuthStore
