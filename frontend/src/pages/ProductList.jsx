import styledComponents from 'styled-components'
import Navbar from './../components/Navbar'
import Announcement from './../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from './../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

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
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('newest')

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({ ...filters, [e.target.name]: value })
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
