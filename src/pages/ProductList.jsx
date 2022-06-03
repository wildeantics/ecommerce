import styledComponents from 'styled-components'
import Navbar from './../components/Navbar'
import Announcement from './../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from './../responsive'

//   Elements
const Container = styledComponents.div``
const Title = styledComponents.h1`
margin: 20px;`
const FilterContainer = styledComponents.div`
  display: flex;
  justify-content: space-between;`
const Filter = styledComponents.div`
margin: 20px;
  ${mobile({ margin: '0 20px', display: 'flex', flexDirection: 'column' })}`
const FilterText = styledComponents.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
  ${mobile({ marginRight: 0 })}`
const Select = styledComponents.select`
padding: 10px;
margin-right: 20px;
  ${mobile({ margin: '5px 0' })}`
const Option = styledComponents.option``

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
