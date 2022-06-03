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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;`
const Wrapper = styledComponents.div`
padding: 20px;
width: 25%;
background-color: #fff;
border-radius: 10px;
  ${mobile({ width: '75%' })}`
const Title = styledComponents.h1`
font-size: 24px;
font-weight: 300;`
const Form = styledComponents.form`
display: flex;
flex-direction: column;`
const Input = styledComponents.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;`
const Button = styledComponents.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: #fff;
cursor: pointer;
margin-bottom: 10px;`
const Link = styledComponents.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
curson: pointer;`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Button>Login</Button>
          <Link to='/register'>Forgot Password</Link>
          <Link to='/register'>Register</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
