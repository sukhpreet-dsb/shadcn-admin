import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Graph from '@/assets/graph.png'

const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
]
const chartConfig = {
  visitors: {
    label: 'count',
  },
  chrome: {
    label: 'Complete',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'In progress',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Pending',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Assigned',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

export default function Activities() {
  return (
    <Card className='shadow-custom space-y-0 border-none'>
      <CardHeader className='space-y-0 pb-2 '>
        <CardTitle className='flex justify-between text-sm font-medium '>
          <div>
            <h1 className='text-base font-bold'>Wave Forecast</h1>
            {/* <p className='text-xs font-semibold text-[#0C7EC4]'>
              Mount Martha Rocks
            </p> */}
            {/* <h1 className='text-4xl font-bold text-[#0C7EC4]'>HIGH</h1> */}
          </div>
          <div>
            <Select>
              <SelectTrigger className='w-[120px] border-none'>
                <SelectValue placeholder='Select a range' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Daily</SelectLabel>
                  <SelectItem value='Weekly'>Weekly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <img src={Graph} alt='chart-image' className='w-full' />
        </div>
        <div className='flex items-center justify-between gap-2 mt-3'>
          <div>
            <h1 className='text-xs font-semibold'>Length of day</h1>
            <p className='text-[#0C7EC4] font-extrabold text-lg'>13H 12M</p>
          </div>
          <div>
            <h1 className='text-xs font-semibold'>Remaining Daylight</h1>
            <p className='text-[#0C7EC4] font-extrabold text-lg'>3H 12M</p>
          </div>
          <div>
            <h1 className='text-xs font-semibold'>Wave Length</h1>
            <p className='text-[#0C7EC4] font-extrabold text-lg'>30 metres</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
