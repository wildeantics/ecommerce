import './topbar.css'
import { Language, NotificationsNone, Settings } from '@mui/icons-material/'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>wilde | admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>12</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://avatars.githubusercontent.com/u/50982333?v=4'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  )
}
