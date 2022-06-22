import styledComponents from 'styled-components'
import Navigation from './../components/Navigation'

//   Elements
const NewUserContainer = styledComponents.div`
flex: 4;
`
const NewUserForm = styledComponents.form`
  display: flex;
  flex-wrap: wrap;
`
const NewUserItem = styledComponents.div`
display: flex;
flex-direction: column;
margin: 10px 20px 0 0;
width: 400px;
& > label {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #c2c2c2;
}
& > input,
select {
  border: 1px solid rgba(0, 128, 128, 0.3);
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
}
& > input:focus,
select:focus {
  outline: none;
  border: 2px solid teal;
}
`
const NewUserButton = styledComponents.button`
  width: 200px;
  border: none;
  background-color: teal;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  `
const NewUserGender = styledComponents.div`
& > input {
  margin-top: 15px;
}
& > label {
  margin: 10px;
  font-size: 18px;
  color: #555;
}
`

export default function AdminNewUser() {
  return (
    <Navigation>
      <NewUserContainer>
        <h1 className='newUserTitle'>New User</h1>
        <NewUserForm>
          <NewUserItem>
            <label htmlFor=''>Username</label>
            <input type='text' placeholder='Morgan' />
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>Full Name</label>
            <input type='text' placeholder='Morgan' />
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='Morgan' />
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>Password</label>
            <input type='password' placeholder='Morgan' />
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>DOB</label>
            <input type='date' />
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>Phone</label>
            <input type='text' placeholder='Morgan' />
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>Address</label>
            <input type='text' placeholder='Morgan' />
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>Gender</label>
            <NewUserGender>
              <input type='radio' name='gender' id='male' value='male' />
              <label htmlFor='male'>Male</label>
              <input type='radio' name='gender' id='female' value='female' />
              <label htmlFor='female'>Female</label>
              <input
                type='radio'
                name='gender'
                id='nonBinary'
                value='nonBinary'
              />
              <label htmlFor='nonBinary'>Non-Binary</label>
            </NewUserGender>
          </NewUserItem>
          <NewUserItem>
            <label htmlFor=''>Active</label>
            <select name='active' id='active'>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </NewUserItem>
          <NewUserButton>Create</NewUserButton>
        </NewUserForm>
      </NewUserContainer>
    </Navigation>
  )
}
