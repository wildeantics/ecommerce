import styledComponents from 'styled-components'
import { Language, NotificationsNone, Settings } from '@mui/icons-material/'
import { Link } from 'react-router-dom'

//   Elements
const NavbarContainer = styledComponents.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;`
const NavbarWrapper = styledComponents.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;`
const Logo = styledComponents.span`
  font-weight: bold;
  font-size: 30px;
  color: teal;
  cursor: pointer;`
const TopRight = styledComponents.div`
  display: flex;
  align-items: center;
  & > div { 
  display: flex;
  align-items: center;
font-family: 'Source Sans Pro', sans-serif;
    & > a {
    text-decoration: none;
    color: #000;
    margin-right: 10px
  }}`
const NavbarIconContainer = styledComponents.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;`
const TopIconBadge = styledComponents.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: red;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  align-items: center;`
const TopAvatar = styledComponents.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;`

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <div>
          <Logo>Buyify. | admin</Logo>
        </div>
        <TopRight>
          <div>
            <Link to='/'>Store</Link>
          </div>
          <NavbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>12</TopIconBadge>
          </NavbarIconContainer>
          <NavbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </NavbarIconContainer>
          <NavbarIconContainer>
            <Settings />
          </NavbarIconContainer>
          <TopAvatar
            src='https://avatars.githubusercontent.com/u/50982333?v=4'
            alt=''
          />
        </TopRight>
      </NavbarWrapper>
    </NavbarContainer>
  )
}
