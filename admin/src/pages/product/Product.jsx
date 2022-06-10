import './product.css'
import { Link } from 'react-router-dom'
import Chart from './../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'

export default function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/product/new'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://avatars.githubusercontent.com/u/50982333?v=4'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>1234</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>10</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label htmlFor=''>Product Name</label>
            <input
              type='text'
              placeholder='Apple Airpods'
              className='productUpdateInput'
            />
            <label htmlFor=''>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='true'>true</option>
              <option value='false'>false</option>
            </select>
            <label htmlFor=''>Active</label>
            <select name='active' id='active'>
              <option value='true'>true</option>
              <option value='false'>false</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://avatars.githubusercontent.com/u/50982333?v=4'
                alt=''
                className='productUploadImg'
              />
              <label
                htmlFor='file'
                className='productUpdateUploadIconContainer'
              >
                <Publish className='productUpdateUploadIcon' />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
              <button className='productUpdateButton'>Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
