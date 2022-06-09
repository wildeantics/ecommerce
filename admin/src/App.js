import './app.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </>
  )
}

export default App
