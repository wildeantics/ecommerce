import styledComponents from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import { rows } from '../../dummyData'
import { useDispatch, useSelector } from 'react-redux'
// import { deleteProduct, getProducts } from '../../redux/apiCalls'
import Navigation from './../components/Navigation'

//   Elements
const ProductListContainer = styledComponents.div`
flex: 4;`
const ProductListItem = styledComponents.div`
  display: flex;
  align-items: center;`

const ProductListImg = styledComponents.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;`

export default function AdminProductList() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  const handleDelete = (id) => {
    // deleteProduct(id, dispatch)
  }

  useEffect(() => {
    // getProducts(dispatch)
  }, [])

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductListImg src={params.row.img} alt='' />
            {params.row.title}
          </ProductListItem>
        )
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
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
          <>
            <Link to={'/product/' + params.row._id}>
              <button>Edit</button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row._id)} />
          </>
        )
      },
    },
  ]

  return (
    <Navigation>
      <ProductListContainer>
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          checkboxSelection
        />
      </ProductListContainer>
    </Navigation>
  )
}
