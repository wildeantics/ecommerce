import './widgetSm.css'
import { Visibility } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { userRequest } from '../../hooks/requestMethods'
import { Link } from 'react-router-dom'

export default function WidgetSm() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('/users/new=true')
        setUsers(res.data)
      } catch (error) {}
    }
    getUsers()
  }, [])
  return (
    <div className='widgetSm'>
      <h3 className='widgetSmTitle'>New Users</h3>
      <ul className='widgetSmList'>
        {users.map((user) => (
          <li className='widgetSmListItem' key={user._id}>
            <img src={user.img} alt={user.username} className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <Link to={`/user/${user._id}`}>
              <button className='widgetSmButton'>
                <Visibility className='widgetSmIcon' /> Display
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
