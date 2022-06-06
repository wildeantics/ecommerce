import styledComponents from 'styled-components'
import { mobile } from './../responsive'

//   Elements
const Container = styledComponents.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;`
const Wrapper = styledComponents.div`
padding: 20px;
width: 40%;
background-color: #fff;
border-radius: 10px;
  ${mobile({ width: '75%' })}`
const Title = styledComponents.h1`
font-size: 24px;
font-weight: 300;`
const Form = styledComponents.form`
display: flex;
flex-wrap: wrap;`
const Input = styledComponents.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;`
const Agreement = styledComponents.span`
font-size: 12px;
margin: 20px 0;`
const Button = styledComponents.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: #fff;
cursor: pointer;`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
