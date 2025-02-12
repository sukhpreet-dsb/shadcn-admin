import { EmployeeFilterParams } from '@/types/data-types'
import { create } from 'zustand'

const useEmployeeStore = create<EmployeeFilterParams>((set) => ({
  employeeId: '',
  setEmployeeId: (id: string) => set({ employeeId: id }),
  startDate: null,
  setStartDate: (date: Date) => set({ startDate: date }),
  endDate: null,
  setEndDate: (date: Date) => set({ endDate: date }),
  managerName: '',
  setManagerName: (name: string) => set({ managerName: name }),
  employeeName: '',
  setEmployeeName: (name: string) => set({ employeeName: name }),
  employeeLists: [],
  setEmployeeLists: (data: []) => set({ employeeLists: data })
}))

export default useEmployeeStore
