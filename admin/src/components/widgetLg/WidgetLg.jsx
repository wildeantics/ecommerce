import './widgetLg.css'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tbody>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://avatars.githubusercontent.com/u/50982333?v=4'
                alt=''
                className='widgetLgImg'
              />
              <span className='widgetLgName'>John Doe</span>
            </td>
            <td className='widgetLgDate'>12/12/2019</td>
            <td className='widgetLgAmount'>$100</td>
            <td className='widgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
