import './featuredInfo.css'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import { features } from '../../dummyData'
import { useState, useEffect } from 'react'
import { userRequest } from '../../hooks/requestMethods'

export default function FeaturedInfo() {
  const [income, setIncome] = useState([])
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('/orders/income')
        setIncome(res.data)
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100)
      } catch (error) {}
    }
    getIncome()
  }, [])

  return (
    <div className='featured'>
      {features.map((feature) => (
        <div className='featuredItem' key={feature.title}>
          <span className='featuredTitle'>{feature.title}</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>${income[1]?.total}</span>
            <span className='featuredMoneyRate'>
              {Math.floor(percentage)}%{' '}
              {percentage < 0 ? (
                <ArrowDownward className='featuredIcon negative' />
              ) : (
                <ArrowUpward className='featuredIcon' />
              )}
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
      ))}
    </div>
  )
}
