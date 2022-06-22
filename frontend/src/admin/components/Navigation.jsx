import styledComponents from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

//   Elements
const Container = styledComponents.div`
font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  display: flex;
  margin-top: 10px;
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,900,900italic);
`

export default function Navigation({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        {children}
      </Container>
    </>
  )
}
