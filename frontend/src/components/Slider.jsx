import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react'
import styledComponents from 'styled-components'
import { sliderItems } from './../data'
import { mobile, tablet } from './../responsive'
import { Link } from 'react-router-dom'

//   Elements
const Container = styledComponents.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}`
const Arrow = styledComponents.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;`
const Wrapper = styledComponents.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slide * -100}vw)`
const Slide = styledComponents.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};`
const ImgContainer = styledComponents.div`
  flex: 1;
  height: 100%;
  width: 50%;`
const Image = styledComponents.img`
  height: 100%;
  width: 100%;
  object-fit: cover;`
const InfoContainer = styledComponents.div`
  flex: 1;
  padding: 50px;
  width: 50%;`
const Title = styledComponents.h1`
  font-size: 70px;
  ${tablet({ fontSize: '50px' })}}`
const Description = styledComponents.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;`
const Button = styledComponents.button`
  padding: 10px;
  font-size: 20px;
  background-color: teal;
  color: #fff;
  border: none;
  cursor: pointer;`

const Slider = () => {
  // State
  const [slide, setSlide] = useState(0)

  // Functions
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlide(slide > 0 ? slide - 1 : sliderItems.length - 1)
    } else {
      setSlide(slide < sliderItems.length - 1 ? slide + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slide={slide}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link to={item.link}>
                <Button>Shop Now</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
