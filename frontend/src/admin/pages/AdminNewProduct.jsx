import styledComponents from 'styled-components'
import Navigation from '../components/Navigation'

//   Elements
const NewProductContainer = styledComponents.div`
flex: 4;
`
const NewProductForm = styledComponents.form`
display: flex;
flex-wrap: wrap;
`
const NewProductItem = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px 0 0;
  width: 500px;
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
  & > input {
    margin-top: 15px;
  }
  & > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`
const NewProductButton = styledComponents.button`
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

export default function AdminNewProduct() {
  return (
    <Navigation>
      <NewProductContainer>
        <h1 className='newProductTitle'>New Product</h1>
        <NewProductForm>
          <NewProductItem>
            <label>Image</label>
            <input type='file' id='file' />
          </NewProductItem>
          <NewProductItem>
            <label>Title</label>
            <input name='title' type='text' placeholder='Apple Airpods' />
          </NewProductItem>
          <NewProductItem>
            <label>Description</label>
            <input name='desc' type='text' placeholder='description...' />
          </NewProductItem>
          <NewProductItem>
            <label>Price</label>
            <input name='price' type='number' placeholder='100' />
          </NewProductItem>
          <NewProductItem>
            <label>Categories</label>
            <input type='text' placeholder='jeans,skirts' />
          </NewProductItem>
          <NewProductItem>
            <label htmlFor=''>Address</label>
            <input type='text' placeholder='Morgan' />
          </NewProductItem>
          <NewProductItem>
            <label>Stock</label>
            <select name='inStock'>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </NewProductItem>
          <NewProductItem>
            <label htmlFor=''>Active</label>
            <select name='active' id='active'>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </NewProductItem>
          <NewProductButton className='newProductButton'>
            Create
          </NewProductButton>
        </NewProductForm>
      </NewProductContainer>
    </Navigation>
  )
}
