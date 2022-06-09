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

export default function Sidebar() {
  const menus = [
    {
      title: 'Dashboard',
      links: [
        { icon: <LineStyle className='sidebarIcon' />, for: 'Home' },
        { icon: <Timeline className='sidebarIcon' />, for: 'Analytics' },
        { icon: <TrendingUp className='sidebarIcon' />, for: 'Sales' },
      ],
    },
    {
      title: 'Quick Menu',
      links: [
        { icon: <PermIdentity className='sidebarIcon' />, for: 'Users' },
        { icon: <Storefront className='sidebarIcon' />, for: 'Products' },
        {
          icon: <AttachMoney className='sidebarIcon' />,
          for: 'Transactions',
        },
        { icon: <BarChart className='sidebarIcon' />, for: 'Reports' },
      ],
    },
    {
      title: 'Notifications',
      links: [
        { icon: <MailOutline className='sidebarIcon' />, for: 'Mail' },
        { icon: <DynamicFeed className='sidebarIcon' />, for: 'Feedback' },
        {
          icon: <ChatBubbleOutline className='sidebarIcon' />,
          for: 'Messages',
        },
      ],
    },
    {
      title: 'Staff',
      links: [
        { icon: <WorkOutline className='sidebarIcon' />, for: 'Manage' },
        { icon: <Timeline className='sidebarIcon' />, for: 'Analytics' },
        { icon: <Report className='sidebarIcon' />, for: 'Reports' },
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
                  {link.icon}
                  {link.for}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
