import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { mobile } from './../responsive'

// Elements
const Container = styledComponents.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;`
const Image = styledComponents.img`
width: 100%;
height: 100%;
object-fit: cover;
  ${mobile({ height: '20vh' })}`
const Info = styledComponents.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`
const Title = styledComponents.h1`
color: #fff;
margin-bottom: 20px;
text-align: center`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
