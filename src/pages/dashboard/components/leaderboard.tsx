import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconMedal, IconDotsVertical } from '@tabler/icons-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'



export default function Leaderboard()
{
    return (
        <Card>
            <CardHeader className=' space-y-0 border-b-2 pb-2 '>
              <CardTitle className='text-center text-sm font-medium '>
                Leaderboard
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
                      Completed Jobs :- 301
                    </p>
                  </div>
                </div>
                <div className='mt-2 flex'>
                  <IconMedal size={18} />
                  <IconDotsVertical size={18} />
                </div>
              </div>

              <div className='flex justify-between'>
                <div className='mt-2  flex gap-3'>
                <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            </Avatar>
                  <div>
                    <p className='text-xs -tracking-tight'>Deepak Sharma</p>
                    <p className='text-xs tracking-tight text-muted-foreground'>
                      Completed Jobs :- 301
                    </p>
                  </div>
                </div>
                <div className='mt-4 flex'>
                  <IconMedal size={18} />
                  <IconDotsVertical size={18} />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='mt-2  flex gap-3'>
                <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            </Avatar>
                  <div>
                    <p className='text-xs -tracking-tight'>Deepak Sharma</p>
                    <p className='text-xs tracking-tight text-muted-foreground'>
                      Completed Jobs :- 301
                    </p>
                  </div>
                </div>
                <div className='mt-4 flex'>
                  <IconMedal size={18} />
                  <IconDotsVertical size={18} />
                </div>
              </div>
            </CardContent>
          </Card>
    )
}