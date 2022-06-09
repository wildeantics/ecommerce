import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      const productIndex = state.products.findIndex((p) => p.id === product.id)
      if (productIndex === -1) {
        state.products.push(product)
      } else {
        state.products[productIndex].quantity += 1
      }
      state.quantity += 1
      state.total += product.price * product.amount
    },
  },
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
