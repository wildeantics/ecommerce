import styledComponents from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../components/Chart'
import { Publish } from '@mui/icons-material'
// import { userRequest } from '../../hooks/requestMethods'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Navigation from './../components/Navigation'

//   Elements
const ProductContainer = styledComponents.div`
flex: 4;
padding: 20px;
`
const ProductTitleContainer = styledComponents.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const ProductAddButton = styledComponents.button`
width: 80px;
border: none;
padding: 5px;
background-color: teal;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
`
const ProductTop = styledComponents.div`
display: flex;
`
const ProductTopLeft = styledComponents.div`
  flex: 1;
  `
const ProductTopRight = styledComponents.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin: 20px;
  `
const ProductInfoTop = styledComponents.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const ProductInfoImg = styledComponents.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  `
const ProductName = styledComponents.span`
  font-weight: 600;
  `
const ProductInfoBottom = styledComponents.div`
margin-top: 10px;
width: 100%;
`
const ProductInfoItem = styledComponents.div`
display: flex;
justify-content: space-between;
`
const ProductInfoValue = styledComponents.span`
  font-weight: 300;
  `
const ProductBottom = styledComponents.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin: 20px;
  `
const ProductForm = styledComponents.form`
display: flex;
justify-content: space-between;
`
const ProductFormLeft = styledComponents.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-right: 20px;
  & > label {
    margin: 10px 0 5px 0;
    color: gray;
    font-size: 14px;
  }
  `
const ProductFormRight = styledComponents.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
flex: 1;
`
const ProductUpload = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  `
const ProductUploadImg = styledComponents.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 25%;
  object-fit: cover;
  `
const ProductUpdateButton = styledComponents.button`
width: 100px;
border: none;
padding: 5px;
background-color: teal;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
`

export default function AdminProduct() {
  const location = useLocation()
  const productId = location.pathname.split('/')[2]
  const [pStats, setPStats] = useState([])

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  )

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get('orders/income?pid=' + productId)
  //       const list = res.data.sort((a, b) => {
  //         return a._id - b._id
  //       })
  //       list.map((item) =>
  //         setPStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], Sales: item.total },
  //         ])
  //       )
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getStats()
  // }, [productId, MONTHS])

  return (
    <Navigation>
      <ProductContainer>
        <ProductTitleContainer>
          <h1 className='productTitle'>Product</h1>
          <Link to='/product/new'>
            <ProductAddButton>Create</ProductAddButton>
          </Link>
        </ProductTitleContainer>
        <ProductTop>
          <ProductTopLeft>
            <Chart data={pStats} dataKey='Sales' title='Sales Performance' />
          </ProductTopLeft>
          <ProductTopRight>
            <ProductInfoTop>
              <ProductInfoImg src={product.img} alt='' />
              <ProductName>{product.title}</ProductName>
            </ProductInfoTop>
            <ProductInfoBottom>
              <ProductInfoItem>
                <span>id:</span>
                <ProductInfoValue>{product._id}</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <span>sales:</span>
                <ProductInfoValue>5123</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <span>in stock:</span>
                <ProductInfoValue>{product.inStock}</ProductInfoValue>
              </ProductInfoItem>
            </ProductInfoBottom>
          </ProductTopRight>
        </ProductTop>
        <ProductBottom>
          <ProductForm>
            <ProductFormLeft>
              <label>Product Name</label>
              <input type='text' placeholder={product.title} />
              <label>Product Description</label>
              <input type='text' placeholder={product.desc} />
              <label>Price</label>
              <input type='text' placeholder={product.price} />
              <label>In Stock</label>
              <select name='inStock' id='idStock'>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </ProductFormLeft>
            <ProductFormRight>
              <ProductUpload>
                <ProductUploadImg src={product.img} alt='' />
                <label for='file'>
                  <Publish />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </ProductUpload>
              <ProductUpdateButton>Update</ProductUpdateButton>
            </ProductFormRight>
          </ProductForm>
        </ProductBottom>
      </ProductContainer>
    </Navigation>
  )
}
