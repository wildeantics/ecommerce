import './newProduct.css'

export default function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className='newProductTitle'>New Product</h1>
      <form action='' className='newProductForm'>
        <div className='newProductItem'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className='newProductItem'>
          <label>Title</label>
          <input name='title' type='text' placeholder='Apple Airpods' />
        </div>
        <div className='newProductItem'>
          <label>Description</label>
          <input name='desc' type='text' placeholder='description...' />
        </div>
        <div className='newProductItem'>
          <label>Price</label>
          <input name='price' type='number' placeholder='100' />
        </div>
        <div className='newProductItem'>
          <label>Categories</label>
          <input type='text' placeholder='jeans,skirts' />
        </div>
        <div className='newProductItem'>
          <label htmlFor=''>Address</label>
          <input type='text' placeholder='Morgan' />
        </div>
        <div className='newProductItem'>
          <label>Stock</label>
          <select name='inStock'>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <div className='newProductItem'>
          <label htmlFor=''>Active</label>
          <select name='active' id='active'>
            <option value='true'>True</option>
            <option value='false'>False</option>
          </select>
        </div>
        <button className='newProductButton'>Create</button>
      </form>
    </div>
  )
}
