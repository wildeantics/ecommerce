import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './app.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import Login from './pages/login/Login'

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin)
  return (
    <Router>
      {admin && <Topbar />}
      <div className='container'>
        {admin && <Sidebar />}
        <Routes>
          {admin && (
            <>
              <Route path='/' exact element={<Home />} />
              <Route path='/users' element={<UserList />} />
              <Route path='/user/:userId' element={<User />} />
              <Route path='/user/new' element={<NewUser />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/product/new' element={<NewProduct />} />
            </>
          )}
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
