import { Send } from '@mui/icons-material'
import styledComponents from 'styled-components'
import { mobile } from './../responsive'

const Container = styledComponents.div`
height: 60vh;
background-color: #f5f5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`
const Title = styledComponents.h1`
font-size: 70px;
margin-bottom: 20px;`
const Description = styledComponents.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}`
const InputContainer = styledComponents.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
  ${mobile({ width: '80%' })}`
const Input = styledComponents.input`
border: none;
flex: 8;
padding-left: 20px;`
const Button = styledComponents.button`
flex: 2;
border: none;
background-color: teal;
color: #fff;`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
