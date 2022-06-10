import './newUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form action='' className='newUserForm'>
        <div className='newUserItem'>
          <label htmlFor=''>Username</label>
          <input type='text' placeholder='Morgan' />
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>Full Name</label>
          <input type='text' placeholder='Morgan' />
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>Email</label>
          <input type='email' placeholder='Morgan' />
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>Password</label>
          <input type='password' placeholder='Morgan' />
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>DOB</label>
          <input type='date' />
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>Phone</label>
          <input type='text' placeholder='Morgan' />
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>Address</label>
          <input type='text' placeholder='Morgan' />
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>Gender</label>
          <div className='newUserGender'>
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
          </div>
        </div>
        <div className='newUserItem'>
          <label htmlFor=''>Active</label>
          <select name='active' id='active'>
            <option value='true'>True</option>
            <option value='false'>False</option>
          </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  )
}
