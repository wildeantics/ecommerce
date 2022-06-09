import './featuredInfo.css'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'

export default function FeaturedInfo() {
  const features = [
    {
      title: 'Revenue',
      money: '$1',
      rate: '2',
    },
    {
      title: 'Sales',
      money: '$11',
      rate: '22',
    },
    {
      title: 'Cost',
      money: '$111',
      rate: '222',
    },
  ]

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
