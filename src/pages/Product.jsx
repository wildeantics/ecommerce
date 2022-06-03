import { Add, Remove } from '@mui/icons-material'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Navbar from './../components/Navbar'
import { mobile } from './../responsive'

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
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
