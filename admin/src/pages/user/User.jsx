import './user.css'
import { Link } from 'react-router-dom'
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material'

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/user/new'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://avatars.githubusercontent.com/u/50982333?v=4'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Me</span>
              <span className='userShowUserTitle'>Worker</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>wildeantics</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>28.05.1992</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+61 432 000 000</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>email@wilde.mx</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>123 Street</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form action='' className='userUpdateForm'>
            <div className='userUpdateFormLeft'>
              <div className='userUpdateItem'>
                <label htmlFor=''>Username</label>
                <input
                  type='text'
                  placeholder='wildeantics'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Full Name</label>
                <input
                  type='text'
                  placeholder='wildeantics'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Email</label>
                <input
                  type='text'
                  placeholder='wildeantics'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>DOB</label>
                <input
                  type='text'
                  placeholder='wildeantics'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Phone</label>
                <input
                  type='text'
                  placeholder='wildeantics'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Address</label>
                <input
                  type='text'
                  placeholder='wildeantics'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateFormRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://avatars.githubusercontent.com/u/50982333?v=4'
                  alt=''
                  className='userUpdateImg'
                />
                <label htmlFor='file' className='userUpdateUploadIcon'>
                  <Publish />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
