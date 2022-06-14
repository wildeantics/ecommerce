import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../hooks/requestMethods'

export default function Home() {
  const [userStats, setUserStats] = useState([])
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats')
        res.data.map((stat) => [
          setUserStats((prevStats) => [
            ...prevStats,
            { name: MONTHS[stat._id - 1], 'Active User': stat.total },
          ]),
        ])
      } catch (error) {}
    }
    getStats()
  }, [MONTHS])
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} title='User Analytics' dataKey='Active Users' />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
