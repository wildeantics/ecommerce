import './featuredInfo.css'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import { features } from '../../dummyData'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      {features.map((feature) => (
        <div className='featuredItem' key={feature.title}>
          <span className='featuredTitle'>{feature.title}</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>{feature.money}</span>
            <span className='featuredMoneyRate'>
              {feature.rate} <ArrowDownward className='featuredIcon negative' />
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
      ))}
    </div>
  )
}
