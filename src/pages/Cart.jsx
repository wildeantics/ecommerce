import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from './../components/Navbar'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from './../responsive'

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
            <Product>
              <ProductDetail>
                <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color='gray' />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
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
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
