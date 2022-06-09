import './widgetSm.css'
import { Visibility } from '@mui/icons-material'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <h3 className='widgetSmTitle'>New Users</h3>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            src='https://avatars.githubusercontent.com/u/50982333?v=4'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Uname</span>
            <span className='widgetSmUserTitle'>Utitle</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
      </ul>
    </div>
  )
}
