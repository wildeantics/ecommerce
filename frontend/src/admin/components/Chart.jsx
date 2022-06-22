import styledComponents from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

//   Elements
const ChartContainer = styledComponents.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);`
const ChartTitle = styledComponents.h3`
  margin-bottom: 20px;
  color:teal`

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='teal' />
          <Tooltip />
          <Line
            type='monotone'
            dataKey={dataKey}
            stroke='#000'
            activeDot={{ r: 8 }}
          />
          {grid && <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
