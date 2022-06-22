import styledComponents from 'styled-components'
import { Link } from 'react-router-dom'
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material'
import Navigation from './../components/Navigation'

//   Elements
const UserContainer = styledComponents.div`
  flex: 4;
  padding: 20px;
  `
const UserTitleContainer = styledComponents.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  `
const UserAddButton = styledComponents.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  `
const UserContainerInner = styledComponents.div`
  display: flex;
  `
const UserShow = styledComponents.div`
flex: 1;
padding: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const UserShowTop = styledComponents.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;`
const UserShowImg = styledComponents.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;`
const UserShowTopTitle = styledComponents.div`
  display: flex;
  flex-direction: column;`
const UserShowUsername = styledComponents.span`
  font-weight: 600;`
const UserShowUserTitle = styledComponents.span`
  font-weight: 300;`
const UserShowTitle = styledComponents.span`
  font-size: 14px;
  font-weight: 600;
  color: #c2c2c2;`
const UserShowInfo = styledComponents.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: #444;
& > .userShowIcon {
  font-size: 16px !important;
  margin-right: 10px;
}`
const UserUpdate = styledComponents.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;`
const UserUpdateTitle = styledComponents.span`
  font-size: 24px;
  font-weight: 600;`
const UserUpdateForm = styledComponents.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;`
const UserUpdateFormLeft = styledComponents.div`
  flex: 2;
  margin-right: 20px;`
const UserUpdateFormRight = styledComponents.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;`
const UserUpdateItem = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & > label {
  margin-bottom: 5px;
  font-size: 14px;
}`

const UserUpdateInput = styledComponents.input`
  border: none;
  border-bottom: 1px solid rgba(0, 128, 128, 0.2);
  padding: 5px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  &:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid teal;
}`
const UserUpdateUpload = styledComponents.div`
  position: relative;`
const UserUpdateImg = styledComponents.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 25%;
  object-fit: cover;`
const UserUpdateUploadIcon = styledComponents.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(194, 194, 194, 0.9);
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;`
const UserUpdateButton = styledComponents.button`
  width: 100px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;`

export default function AdminUser() {
  return (
    <Navigation>
      <UserContainer>
        <UserTitleContainer>
          <h1>Edit User</h1>
          <Link to='/user/new'>
            <UserAddButton>Create</UserAddButton>
          </Link>
        </UserTitleContainer>
        <UserContainerInner>
          <UserShow>
            <UserShowTop>
              <UserShowImg
                src='https://avatars.githubusercontent.com/u/50982333?v=4'
                alt=''
              />
              <UserShowTopTitle>
                <UserShowUsername>Me</UserShowUsername>
                <UserShowUserTitle>Worker</UserShowUserTitle>
              </UserShowTopTitle>
            </UserShowTop>
            <div>
              <UserShowTitle>Account Details</UserShowTitle>
              <UserShowInfo>
                <PermIdentity className='userShowIcon' />
                <span>wildeantics</span>
              </UserShowInfo>
              <UserShowInfo>
                <CalendarToday className='userShowIcon' />
                <span>28.05.1992</span>
              </UserShowInfo>
              <UserShowTitle>Contact Details</UserShowTitle>
              <UserShowInfo>
                <PhoneAndroid className='userShowIcon' />
                <span>+61 432 000 000</span>
              </UserShowInfo>
              <UserShowInfo>
                <MailOutline className='userShowIcon' />
                <span>email@wilde.mx</span>
              </UserShowInfo>
              <UserShowInfo>
                <LocationSearching className='userShowIcon' />
                <span>123 Street</span>
              </UserShowInfo>
            </div>
          </UserShow>
          <UserUpdate>
            <UserUpdateTitle>Edit</UserUpdateTitle>
            <UserUpdateForm>
              <UserUpdateFormLeft>
                <UserUpdateItem>
                  <label htmlFor=''>Username</label>
                  <UserUpdateInput type='text' placeholder='wildeantics' />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label htmlFor=''>Full Name</label>
                  <UserUpdateInput type='text' placeholder='wildeantics' />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label htmlFor=''>Email</label>
                  <UserUpdateInput type='text' placeholder='wildeantics' />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label htmlFor=''>DOB</label>
                  <UserUpdateInput type='text' placeholder='wildeantics' />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label htmlFor=''>Phone</label>
                  <UserUpdateInput type='text' placeholder='wildeantics' />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label htmlFor=''>Address</label>
                  <UserUpdateInput type='text' placeholder='wildeantics' />
                </UserUpdateItem>
              </UserUpdateFormLeft>
              <UserUpdateFormRight>
                <UserUpdateUpload>
                  <UserUpdateImg
                    src='https://avatars.githubusercontent.com/u/50982333?v=4'
                    alt=''
                  />
                  <UserUpdateUploadIcon>
                    <Publish />
                  </UserUpdateUploadIcon>
                  <input type='file' id='file' style={{ display: 'none' }} />
                </UserUpdateUpload>
                <UserUpdateButton>Update</UserUpdateButton>
              </UserUpdateFormRight>
            </UserUpdateForm>
          </UserUpdate>
        </UserContainerInner>
      </UserContainer>
    </Navigation>
  )
}
