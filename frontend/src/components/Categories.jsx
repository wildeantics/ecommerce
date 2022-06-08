import styledComponents from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from './../responsive'

// Elements
const Container = styledComponents.div`
display: flex;
padding: 20px;
justify-content: space-between;
  ${mobile({ padding: '0', flexDirection: 'column' })}`

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  )
}

export default Categories