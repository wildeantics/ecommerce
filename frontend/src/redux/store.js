import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import userReducer from './auth/authSlice'

export const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
})
