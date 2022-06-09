import { Add, Remove } from '@mui/icons-material'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Navbar from './../components/Navbar'
import { mobile } from './../responsive'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from './../hooks/requestMethods'
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
  width: 50%;
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
transition: all 0.2s ease-in-out;
&:hover {
    background-color: teal;
    color: white;
}`

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [amount, setAmount] = useState(1)
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        amount,
        size,
        color,
      })
    )
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id)
        setProduct(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProduct()
  }, [id])

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
              {product.colors?.map((color) => (
                <FilterColor
                  color={color}
                  key={color}
                  onClick={() => setColor(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.sizes?.map((size) => (
                  <FilterSizeOption key={size}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={amount > 1 && (() => setAmount(amount - 1))} />
              <Amount>{amount}</Amount>
              <Add onClick={() => setAmount(amount + 1)} />
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
