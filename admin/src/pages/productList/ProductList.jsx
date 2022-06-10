import './productList.css'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { rows } from '../../dummyData'

export default function ProductList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img
              src={params.row.img}
              alt={params.row.name}
              className='productListImg'
            />
            {params.row.name}
          </div>
        )
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='productListActions'>
            <Link to={'/product/' + params.row.id}>
              <Edit className='productListIcon' />
            </Link>
            <DeleteOutline
              className='productListIcon'
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        )
      },
    },
  ]

  const [data, setData] = useState(rows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  return (
    <div className='productList'>
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
