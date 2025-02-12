import { create } from 'zustand'
import { JobFilterParams } from '@/types/data-types'

const useJobsStore = create<JobFilterParams>(
    (set) => (
        {
            employeeName: '',
            setEmployeeName: (name: string) => set({ employeeName: name }),
            startDate:  null,
            setStartDate: (date: Date|null) => set({ startDate: date }),
            endDate: null,
            setEndDate: (date: Date|null) => set({ endDate: date }),
            jobLocation:'',
            setJobLocation:(location:string)=>set({jobLocation:location})
        }
    )
)

export default useJobsStore