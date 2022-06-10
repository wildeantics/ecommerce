import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img
              src={params.row.avatar}
              alt={params.row.username}
              className='userListAvatar'
            />
            {params.row.username}
          </div>
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
          <div className='userListActions'>
            <Link to={'/user/' + params.row.id}>
              <Edit className='userListIcon' />
            </Link>
            <DeleteOutline
              className='userListIcon'
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
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
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}
