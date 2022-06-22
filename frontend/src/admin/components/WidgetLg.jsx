import styledComponents from 'styled-components'
import { useState, useEffect } from 'react'
// import { userRequest } from '../../hooks/requestMethods'
import { format } from 'timeago.js'

//   Elements
const WidgetLgContainer = styledComponents.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;`
const WidgetLgTitle = styledComponents.h3`
  font-weight: 600;`
const WidgetLgTable = styledComponents.table`
  width: 100%;
  border-spacing: 20px;`
const WidgetLgTh = styledComponents.tr`
  text-align: left;`
const WidgetLgUser = styledComponents.td`
  display: flex;
  align-items: center;
  font-weight: 600;`
const WidgetLgImg = styledComponents.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;`
const WidgetLgData = styledComponents.td`
  font-weight: 300;`
const WidgetLgButton = styledComponents.button`
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  &.approved {
  background-color: teal;
  color: #fff;
}
&.pending {
  background-color: #be7200;
  color: #fff;
}
&.declined {
  background-color: #b40000;
  color: #fff;
}`

export default function WidgetLg({ type }) {
  const [orders, setOrders] = useState([])

  // useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const res = await userRequest.get('/orders')
  //       setOrders(res.data)
  //     } catch (error) {}
  //   }
  //   getOrders()
  // }, [])

  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
      <WidgetLgTable>
        <tbody>
          <tr>
            <WidgetLgTh>Customer</WidgetLgTh>
            <WidgetLgTh>Date</WidgetLgTh>
            <WidgetLgTh>Amount</WidgetLgTh>
            <WidgetLgTh>Status</WidgetLgTh>
          </tr>
          {orders.map((order) => (
            <tr key={order._id}>
              <WidgetLgUser>
                <WidgetLgImg
                  src='https://avatars.githubusercontent.com/u/50982333?v=4'
                  alt=''
                />
                <span className='widgetLgName'>{order.userId}</span>
              </WidgetLgUser>
              <WidgetLgData>{format(order.createdAt)}</WidgetLgData>
              <WidgetLgData>{order.amount}</WidgetLgData>
              <td>
                <WidgetLgButton className={type}>{type}</WidgetLgButton>
              </td>
            </tr>
          ))}
        </tbody>
      </WidgetLgTable>
    </WidgetLgContainer>
  )
}
