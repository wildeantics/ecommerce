import styledComponents from 'styled-components'

// Elements
const Container = styledComponents.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;`

const Announcement = () => {
  return <Container>Super Deal! Free shipping on orders over $50</Container>
}

export default Announcement
