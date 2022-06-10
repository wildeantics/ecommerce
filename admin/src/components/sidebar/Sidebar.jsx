import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const menus = [
    {
      title: 'Dashboard',
      links: [
        { icon: <LineStyle className='sidebarIcon' />, for: 'Home', to: '/' },
        {
          icon: <Timeline className='sidebarIcon' />,
          for: 'Analytics',
          to: '',
        },
        {
          icon: <TrendingUp className='sidebarIcon' />,
          for: 'Sales',
          to: '',
        },
      ],
    },
    {
      title: 'Quick Menu',
      links: [
        {
          icon: <PermIdentity className='sidebarIcon' />,
          for: 'Users',
          to: '/users',
        },
        {
          icon: <Storefront className='sidebarIcon' />,
          for: 'Products',
          to: '/products',
        },
        {
          icon: <AttachMoney className='sidebarIcon' />,
          for: 'Transactions',
          to: '',
        },
        {
          icon: <BarChart className='sidebarIcon' />,
          for: 'Reports',
          to: '',
        },
      ],
    },
    {
      title: 'Notifications',
      links: [
        {
          icon: <MailOutline className='sidebarIcon' />,
          for: 'Mail',
          to: '',
        },
        {
          icon: <DynamicFeed className='sidebarIcon' />,
          for: 'Feedback',
          to: '',
        },
        {
          icon: <ChatBubbleOutline className='sidebarIcon' />,
          for: 'Messages',
          to: '',
        },
      ],
    },
    {
      title: 'Staff',
      links: [
        {
          icon: <WorkOutline className='sidebarIcon' />,
          for: 'Manage',
          to: '',
        },
        {
          icon: <Timeline className='sidebarIcon' />,
          for: 'Analytics',
          to: '',
        },
        {
          icon: <Report className='sidebarIcon' />,
          for: 'Reports',
          to: '',
        },
      ],
    },
  ]

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        {menus.map((menu) => (
          <div className='sidebarMenu' key={menu.title}>
            <h3 className='sidebarTitle'>{menu.title}</h3>
            <ul className='sidebarList'>
              {menu.links.map((link) => (
                <li className='sidebarListItem' key={link.for}>
                  <Link to={link.to} className='sidebarLinks'>
                    {link.icon}
                    {link.for}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
