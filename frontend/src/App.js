import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Success from './pages/Success'
import PrivateRoute from './components/PrivateRoute'

import AdminHome from './admin/pages/AdminHome'
import AdminUserList from './admin/pages/AdminUserList'
import AdminUser from './admin/pages/AdminUser'
import AdminNewUser from './admin/pages/AdminNewUser'
import AdminProductList from './admin/pages/AdminProductList'
import AdminProduct from './admin/pages/AdminProduct'
import NewProduct from './admin/pages/AdminNewProduct'

function App() {
  const user = true
  // useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' exact element={<AdminHome />} />
        <Route path='/admin/users' element={<AdminUserList />} />
        <Route path='/admin/user/:userId' element={<AdminUser />} />
        <Route path='/admin/user/new' element={<AdminNewUser />} />
        <Route path='/admin/products' element={<AdminProductList />} />
        <Route path='/admin/product/:productId' element={<AdminProduct />} />
        <Route path='/admin/product/new' element={<NewProduct />} />

        {/* <Route path='/admin/*' exact element={<PrivateRoute />}> */}
        {/* </Route> */}
      </Routes>
    </Router>
  )
}

export default App
