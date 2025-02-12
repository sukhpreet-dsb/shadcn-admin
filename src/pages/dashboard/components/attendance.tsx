import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

export default function Attendance() {
  return (
    <Card>
      <CardHeader className=' space-y-0 border-b-2 pb-2 '>
        <CardTitle className='flex justify-between text-sm font-medium '>
          <div>
            <p>Attendance</p>
          </div>
          <div>
            <p> View All</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='mt-3'>
        <div className='flex justify-between '>
          <div className='flex gap-3'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            </Avatar>
            <div>
              <p className='text-xs -tracking-tight'>Deepak Sharma</p>
              <p className='text-xs tracking-tight text-muted-foreground'>
                Mohali, Punjab-160062
              </p>
            </div>
          </div>
          <p className='mt-2 text-xs'>9:40 am</p>
        </div>

        <div className='flex justify-between'>
          <div className='mt-2  flex gap-3'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            </Avatar>
            <div>
              <p className='text-xs -tracking-tight'>Deepak Sharma</p>
              <p className='text-xs tracking-tight text-muted-foreground'>
                Mohali, Punjab-160062
              </p>
            </div>
          </div>
          <p className='mt-4 text-xs'>9:40 am</p>
        </div>
        <div className='flex justify-between'>
          <div className='mt-2  flex gap-3'>
          <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            </Avatar>
            <div>
              <p className='text-xs -tracking-tight'>Deepak Sharma</p>
              <p className='text-xs tracking-tight text-muted-foreground'>
                Mohali, Punjab-160062
              </p>
            </div>
          </div>
          <p className='mt-4 text-xs'>9:40 am</p>
        </div>
      </CardContent>
    </Card>
  )
}
