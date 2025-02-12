import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import Chart from '@/assets/Chart.png'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Attendance() {
  return (
    <Card className='shadow-custom border-none'>
      <CardHeader className='space-y-0 pb-2 '>
        <CardTitle className='flex justify-between text-sm font-medium '>
          <div>
            <h1 className='text-base font-bold'>Fish activity</h1>
            <p className='text-xs font-semibold text-[#0C7EC4]'>
              Mount Martha Rocks
            </p>
            <h1 className='text-4xl font-bold text-[#0C7EC4]'>HIGH</h1>
          </div>
          <div>
            <Select>
              <SelectTrigger className='w-[120px] border-none'>
                <SelectValue placeholder='Select a range' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>hourly</SelectLabel>
                  <SelectItem value='Weekly'>Weekly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='mt-3'>
        <div>
          <img src={Chart} alt='chart-image' className='w-full' />
        </div>
      </CardContent>
    </Card>
  )
}
