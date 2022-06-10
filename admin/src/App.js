import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/users' exact element={<UserList />} />
          <Route path='/user/:userId' exact element={<User />} />
          <Route path='/user/new' exact element={<NewUser />} />
          <Route path='/products' exact element={<ProductList />} />
          <Route path='/product/:productId' exact element={<Product />} />
          <Route path='/product/new' exact element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
