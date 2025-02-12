import { AttendanceFilterParams } from '@/types/data-types'
import { create } from 'zustand'

const useAttendanceStore = create<AttendanceFilterParams>((set) => ({
  employeeId: '',
  setEmployeeId: (id: string) => set({ employeeId: id }),

  employeeName: '',
  setEmployeeName: (name: string) => set({ employeeName: name }),

  startDate:  null,
  setStartDate: (date: Date | null) => set({ startDate: date }),

  endDate: null,
  setEndDate: (date: Date | null) => set({ endDate: date }),
}))

export default useAttendanceStore
