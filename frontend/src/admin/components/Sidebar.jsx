import styledComponents from 'styled-components'
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

//   Elements
const SidebarContainer = styledComponents.div`
  flex: 1;
  height: calc(100vh - 60px);
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  top: 50px;`
const SidebarWrapper = styledComponents.div`
padding: 20px;
color: #555;`
const SidebarMenu = styledComponents.div`
  margin-bottom: 10px;`
const SidebarTitle = styledComponents.h3`
  font-size: 13px;
  color: rgb(186, 186, 186);`
const SidebarList = styledComponents.ul`
  list-style: none;
  padding: 5px;`
const SidebarListItem = styledComponents.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover,
& .active {
  background-color: rgb(240, 240, 255);
}
& > .sidebarLinks {
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  & > .sidebarIcon {
  margin-right: 5px;
  font-size: 20px !important;
  color: teal;
}}
`

export default function Sidebar() {
  const menus = [
    {
      title: 'Dashboard',
      links: [
        {
          icon: <LineStyle className='sidebarIcon' />,
          for: 'Home',
          to: '/admin',
        },
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
          to: '/admin/users',
        },
        {
          icon: <Storefront className='sidebarIcon' />,
          for: 'Products',
          to: '/admin/products',
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
    <SidebarContainer>
      <SidebarWrapper>
        {menus.map((menu) => (
          <SidebarMenu key={menu.title}>
            <SidebarTitle>{menu.title}</SidebarTitle>
            <SidebarList>
              {menu.links.map((link) => (
                <SidebarListItem key={link.for}>
                  <Link to={link.to} className='sidebarLinks'>
                    {link.icon}
                    {link.for}
                  </Link>
                </SidebarListItem>
              ))}
            </SidebarList>
          </SidebarMenu>
        ))}
      </SidebarWrapper>
    </SidebarContainer>
  )
}
