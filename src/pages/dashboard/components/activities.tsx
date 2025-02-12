import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
]
const chartConfig = {
  visitors: {
    label: "count",
  },
  chrome: {
    label: "Complete",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "In progress",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Pending",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Assigned",
    color: "hsl(var(--chart-4))",
  }
} satisfies ChartConfig

export default function Activities() {
  return (
    <Card className='space-y-0 border-b-2 pb-2 '>
      <CardHeader className=' space-y-0 border-b-2 pb-2 '>
        <CardTitle className='text-center text-sm font-medium'>
          Activities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
           className="mt-2 p-1"
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
