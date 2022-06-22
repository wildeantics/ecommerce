import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from './../components/Navbar'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from './../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react'
import { userRequest } from '../redux/requestMethods'
import { useNavigate } from 'react-router-dom'

//   Elements
const Container = styledComponents.div``
const Wrapper = styledComponents.div`
padding: 20px;
  ${mobile({ padding: '10px' })}`
const Title = styledComponents.h1`
font-weight: 300;
text-align: center;`
const Top = styledComponents.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;`
const TopButton = styledComponents.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: none;
background-color: ${(props) => (props.type === 'filled' ? 'black' : 'teal')};
color: white;`
const TopTexts = styledComponents.div`
  ${mobile({ display: 'none' })}`
const TopText = styledComponents.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;`
const Bottom = styledComponents.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}`
const Info = styledComponents.div`
  flex: 3;`
const Product = styledComponents.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}`
const ProductDetail = styledComponents.div`
  flex: 2;
  display: flex;`
const Image = styledComponents.img`
  width: 200px;`
const Details = styledComponents.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;`
const ProductName = styledComponents.span``
const ProductId = styledComponents.span``
const ProductColor = styledComponents.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};`
const ProductSize = styledComponents.span``
const PriceDetail = styledComponents.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: 'row', justifyContent: 'space-around' })}`
const ProductAmountContainer = styledComponents.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;`
const ProductAmount = styledComponents.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}`
const ProductPrice = styledComponents.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}`
const Hr = styledComponents.hr`
  background-color: #eee;
  border: none;
  height: 1px;`
const Summary = styledComponents.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;`
const SummaryTitle = styledComponents.h1`
  font-weight: 200;`
const SummaryItem = styledComponents.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};`
const SummaryItemText = styledComponents.span``
const SummaryItemPrice = styledComponents.span``
const Button = styledComponents.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;`

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()
  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = userRequest.post('/checkout/payment', {
          token: stripeToken.id,
          amount: cart.total * 100,
        })
        navigate('/success', { data: res.data })
      } catch (err) {}
    }
    stripeToken && cart.total >= 1 && makeRequest()
  }, [stripeToken, navigate, cart.total])

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, i) => (
              <Product key={i}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.amount}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.amount}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='Buyify'
              image='https://avatars.githubusercontent.com/u/50982333?v=4'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={process.env.REACT_APP_STRIPE}
            >
              <Button>Checkout Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
