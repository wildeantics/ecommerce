import { Add, Remove } from '@mui/icons-material'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Navbar from './../components/Navbar'
import { mobile } from './../responsive'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../redux/requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

//   Elements
const Container = styledComponents.div``
const Wrapper = styledComponents.div`
padding: 50px;
display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}`
const ImgContainer = styledComponents.div`
flex: 1;`
const Image = styledComponents.img`
width: 100%;
height: 90vh;
object-fit: cover;
  ${mobile({ height: '30vh' })}`
const InfoContainer = styledComponents.div`
flex: 1;
padding: 0 50px;
  ${mobile({ padding: '10px' })}`
const Title = styledComponents.h1`
font-weight: 200;`
const Desc = styledComponents.p`
margin: 20px 0;`
const Price = styledComponents.span`
font-weight: 100;
font-size: 40px;`
const Filter = styledComponents.div`
display: flex;
align-items: center;`
const FilterContainer = styledComponents.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
  ${mobile({ width: '100%' })}`
const FilterTitle = styledComponents.span`
font-size: 20px;
font-weight: 200;`
const FilterColor = styledComponents.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;`
const FilterSize = styledComponents.select`
margin-left: 10px;
padding: 5px;`
const FilterSizeOption = styledComponents.option``
const AddContainer = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${mobile({ width: '100%' })}`
const AmountContainer = styledComponents.div`
  display: flex;
  align-items: center;
  font-weight: 700;`
const Amount = styledComponents.span`
width: 30px;
height: 30px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;`
const Button = styledComponents.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
transition: all 0.3s ease-in-out;
&:hover {
    background-color: teal;
    color: white;
font-weight: 600;
}`

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id)
        setProduct(res.data)
      } catch {}
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }))
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
