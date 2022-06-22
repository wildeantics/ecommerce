import styledComponents from 'styled-components'
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/Chart'
import WidgetSm from '../components/WidgetSm'
import WidgetLg from '../components/WidgetLg'
import { useEffect, useMemo, useState } from 'react'
import Navigation from '../components/Navigation'
import { userData } from '../dummyData'
// import { userRequest } from '../../hooks/requestMethods'

//   Elements
const Container = styledComponents.div`
flex: 4;
`
const HomeWidgets = styledComponents.div`
  display: flex;
  margin: 20px;
`

export default function AdminHome() {
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

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get('/users/stats')
  //       res.data.map((stat) => [
  //         setUserStats((prevStats) => [
  //           ...prevStats,
  //           { name: MONTHS[stat._id - 1], 'Active User': stat.total },
  //         ]),
  //       ])
  //     } catch (error) {}
  //   }
  //   getStats()
  // }, [MONTHS])
  return (
    <Navigation>
      <Container>
        <FeaturedInfo />
        <Chart data={userData} title='User Analytics' dataKey='Active Users' />
        <HomeWidgets>
          <WidgetSm />
          <WidgetLg />
        </HomeWidgets>
      </Container>
    </Navigation>
  )
}
