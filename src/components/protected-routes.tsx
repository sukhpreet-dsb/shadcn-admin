import { redirect } from 'react-router-dom'
import useAuthStore from '@/store/use-auth'
import { toast } from './ui/use-toast'

export const publicRoute = async () => {
  const token = useAuthStore.getState().token

  if (token) {
    return redirect('/')
  }
  return null
}

export const privateRoute = async () => {
  const token = useAuthStore.getState().token

  if (!token) {
    return redirect('/sign-in')
  }
  return null
}
export const employeeRoute = async () => {
  const token = useAuthStore.getState().token

  if (!token) {
    return redirect('/sign-in')
  }
  return null
}

export const managerRoute = async () => {
  const token = useAuthStore.getState().token
  const user = useAuthStore.getState().user

  if (!token) {
    return redirect('/sign-in')
  }

  if (user.role !== 'manager') {
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'You are not authorized to access this page',
    })
    return redirect('/')
  }
  return null
}

export const adminRoute = async () => {
  const token = useAuthStore.getState().token
  const user = useAuthStore.getState().user

  if (!token) {
    return redirect('/sign-in')
  }

  if (user.role !== 'admin') {
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'You are not authorized to access this page',
    })
    return redirect('/')
  }
  return null
}
