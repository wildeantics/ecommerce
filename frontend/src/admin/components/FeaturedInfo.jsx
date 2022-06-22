import styledComponents from 'styled-components'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import { features } from '../dummyData'
import { useState, useEffect } from 'react'
// import { userRequest } from '../../hooks/requestMethods'

//   Elements
const FeaturedContainer = styledComponents.div`
  display: flex;
  justify-content: space-between;
  width: 100%;`
const FeaturedItem = styledComponents.div`
  flex: 1;
  margin-left: 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  &:last-child {
    margin-right: 20px
  }`
const FeaturedTitle = styledComponents.h3`
  font-size: 20px;
  color: teal;
  margin: 0;`

const FeaturedMoneyContainer = styledComponents.div`
  margin: 10px 0;
  display: flex;
  align-items: center;`
const FeaturedMoney = styledComponents.span`
  font-size: 30px;
  font-weight: 600;`
const FeaturedMoneyRate = styledComponents.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  & > .featuredIcon {
  font-size: 14px;
  margin-left: 5px;
  color: green;
}
& > .negative {
  color: red;
}`
const FeaturedSub = styledComponents.span`
  font-size: 15px;
  color: grey;`

export default function FeaturedInfo() {
  const [income, setIncome] = useState([])
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    // const getIncome = async () => {
    //   try {
    //     const res = await userRequest.get('/orders/income')
    //     setIncome(res.data)
    //     setPercentage((res.data[1].total * 100) / res.data[0].total - 100)
    //   } catch (error) {}
    // }
    // getIncome()
  }, [])

  return (
    <FeaturedContainer>
      {features.map((feature) => (
        <FeaturedItem key={feature.title}>
          <FeaturedTitle>{feature.title}</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>{feature.money}</FeaturedMoney>
            <FeaturedMoneyRate>
              {feature.rate} %
              <ArrowUpward className='featuredIcon' />
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
      ))}
    </FeaturedContainer>
  )
}
