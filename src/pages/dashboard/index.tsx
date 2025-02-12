import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
// import { DataTable } from '../jobs/components/data-table'
// import { jobs } from '../jobs/data/jobs'
// import {columns} from "../jobs/components/columns"
import Activities from './components/activities'
import Leaderboard from './components/leaderboard'
import Attendance from './components/attendance'
import qr from '@/assets/qr.png'
import { Button } from '@/components/custom/button'

export default function Dashboard() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      {/* <Layout.Header>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header> */}

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div className='flex w-full items-center justify-between gap-3 rounded-2xl bg-[#0C7EC4] p-4'>
            <div className='flex items-center gap-3'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white'>
                <img src={qr} alt='qr-image' />
              </div>
              <div>
                <h1 className='text-[#F2F7F9]'>
                  Fishing regulations for the location
                </h1>
                <h1 className='text-[#F2F7F9]'>
                  Saltwater and freshwater fishing regulations with an easy
                  format.
                </h1>
              </div>
            </div>
            <Button>View regulations</Button>
          </div>
          {/* <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1> */}
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <Attendance />
          <Activities />
          <Leaderboard />
        </div>
        {/* <div className='mt-5'>
          <p className='text-xl font-medium tracking-tight mb-4'>Jobs</p>
          <DataTable data={[]} columns={columns} loading={false} />
        </div> */}
      </Layout.Body>
    </Layout>
  )
}
