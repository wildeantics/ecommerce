import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import { mobile } from '../responsive'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from './../redux/auth/authSlice'

// Elements
const Container = styledComponents.div`
  height: 60px;
  align-items: center;
  ${mobile({ height: '50px' })}`
const Wrapper = styledComponents.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
  ${mobile({ padding: '10px 0' })}`
const Left = styledComponents.div`
flex: 1;
display: flex;
align-items: center;`
const Language = styledComponents.span`
font-size: 14px;
cursor: pointer;
  ${mobile({ display: 'none' })}`
const SearchContainer = styledComponents.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`
const Input = styledComponents.input`
border: none;
&:focus {
  outline: none;
}
  ${mobile({ width: '50px' })}`

const Center = styledComponents.div`
flex: 1;
align-items: center;
text-align: center;`
const Logo = styledComponents.h1`
font-weight: bold;
& > a {
  color: #000;
text-decoration: none;
}
  ${mobile({ fontSize: '20px' })}
  `

const Right = styledComponents.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
  ${mobile({ justifyContent: 'center', flex: 2 })}`
const MenuItem = styledComponents.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
& > a {
  text-decoration: none;
  color: #000;
}
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}`

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = true
  // const { user } = useSelector((state) => state.user)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to='/'>Buyify.</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to='/admin'>Admin</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/register'>Register</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/login'>Sign in</Link>
          </MenuItem>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
