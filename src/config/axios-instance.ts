import useAuthStore from '@/store/use-auth'
import axios from 'axios'
// import { redirect } from 'react-router-dom'
import { env } from './env'

const axiosInstance = axios.create({
  baseURL: env.VITE_API_URL,
})
axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// if response is 401 then logout for now, maybe we can add a refresh token later
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      useAuthStore.getState().logout()
      window.location.href = "/sign-in"
      // redirect("/sign-in")
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
