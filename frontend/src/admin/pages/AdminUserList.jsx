import styledComponents from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './../components/Navigation'

//   Elements
const UserListContainer = styledComponents.div`
flex: 4;
`
const UserListUser = styledComponents.div`
  display: flex;
  align-items: center;
  `
const UserListAvatar = styledComponents.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  `
const UserListActions = styledComponents.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
& > .userListIcon {
  color: black;
  cursor: pointer;
}
`

export default function AdminUserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListAvatar src={params.row.avatar} alt={params.row.username} />
            {params.row.username}
          </UserListUser>
        )
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <UserListActions>
            <Link to={'/user/' + params.row.id}>
              <Edit className='userListIcon' />
            </Link>
            <DeleteOutline
              className='userListIcon'
              onClick={() => handleDelete(params.row.id)}
            />
          </UserListActions>
        )
      },
    },
  ]
  const rows = [
    {
      id: 1,
      username: 'Jon Snow',
      avatar: 'https://avatars.githubusercontent.com/u/50982333?v=4',
      email: 'test@wilde.mx',
      status: 'active',
      transaction: '$1,000,000',
    },
  ]
  const [data, setData] = useState(rows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  return (
    <Navigation>
      <UserListContainer>
        {/* <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      /> */}
      </UserListContainer>
    </Navigation>
  )
}
