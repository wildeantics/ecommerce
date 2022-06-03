import {
  GitHub,
  LinkedIn,
  MailOutline,
  Phone,
  Public,
  Room,
} from '@mui/icons-material'
import styledComponents from 'styled-components'
import { mobile } from './../responsive'

const Container = styledComponents.div`
display: flex;
  ${mobile({ flexDirection: 'column' })}`

const Left = styledComponents.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;`
const Logo = styledComponents.h1``
const Description = styledComponents.div`
margin: 20px 0;`
const SocialContainer = styledComponents.div`
display: flex;`
const SocialIcon = styledComponents.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: #fff;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;`

const Center = styledComponents.div`
flex: 1;
padding: 20px;
  ${mobile({ display: 'none' })}`
const Title = styledComponents.h3`
margin-bottom: 30px;`
const List = styledComponents.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;`
const ListItem = styledComponents.li`
width: 50%;
margin-bottom: 10px;`

const Right = styledComponents.div`
flex: 1;
padding: 20px;
  ${mobile({ backgroundColor: '#f5f5f5', paddingTop: 0 })}`
const ContactItem = styledComponents.div`
margin-bottom: 20px;
display: flex;
align-items: center;`
const Payment = styledComponents.img`
width: 50%;`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Buyify.</Logo>
        <Description>Built in React using Material UI</Description>
        <SocialContainer>
          <SocialIcon color='0d1117'>
            <GitHub />
          </SocialIcon>
          <SocialIcon color='16161d'>
            <Public />
          </SocialIcon>
          <SocialIcon color='0f66be'>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 123 Fake Street
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +61 1234 1234
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> fake@wilde.mx
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer
