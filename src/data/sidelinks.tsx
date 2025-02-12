import {
  IconChecklist,
  IconLayoutDashboard,
  IconSettings,
  IconUserPlus,
  IconBike,
  IconUsers,
  IconBriefcase2,
  IconReportMoney,
  IconHomeFilled,
  IconCalendarEvent,
  IconHaze,
  IconFish
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Home',
    label: '',
    href: '/',
    icon: <IconHomeFilled size={18} />,
  },
  {
    title: 'Events',
    label: '',
    href: '/events',
    icon: <IconCalendarEvent size={18} />,
  },
  {
    title: 'Weather',
    label: '',
    href: '/weather',
    icon: <IconHaze size={18} />,
  },
  {
    title: 'Location',
    label: '',
    href: '/location',
    icon: <IconFish size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
