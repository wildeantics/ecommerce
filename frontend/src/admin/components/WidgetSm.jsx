import styledComponents from 'styled-components'
import { Visibility } from '@mui/icons-material'
import { useState, useEffect } from 'react'
// import { userRequest } from '../../hooks/requestMethods'
import { Link } from 'react-router-dom'

//   Elements
const WidgetSmContainer = styledComponents.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;`
const WidgetSmTitle = styledComponents.h3`
  font-weight: 600;`
const WidgetSmList = styledComponents.ul`
  list-style: none;
  padding: 0;
  margin: 0;`
const WidgetSmItem = styledComponents.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;`
const WidgetSmImg = styledComponents.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;`
const WidgetSmUser = styledComponents.div`
  display: flex;
  flex-direction: column;`
const WidgetSmUsername = styledComponents.span`
  font-weight: 600;`
const WidgetSmButton = styledComponents.span`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
  & > .widgetSmIcon {
  font-size: 16px;
  margin-right: 5px;
}`

export default function WidgetSm() {
  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await userRequest.get('/users/new=true')
  //       setUsers(res.data)
  //     } catch (error) {}
  //   }
  //   getUsers()
  // }, [])
  return (
    <WidgetSmContainer>
      <WidgetSmTitle>New Users</WidgetSmTitle>
      <WidgetSmList>
        {users.map((user) => (
          <WidgetSmItem key={user._id}>
            <WidgetSmImg src={user.img} alt={user.username} />
            <WidgetSmUser>
              <WidgetSmUsername>{user.username}</WidgetSmUsername>
            </WidgetSmUser>
            <Link to={`/user/${user._id}`}>
              <WidgetSmButton>
                <Visibility className='widgetSmIcon' /> Display
              </WidgetSmButton>
            </Link>
          </WidgetSmItem>
        ))}
      </WidgetSmList>
    </WidgetSmContainer>
  )
}
