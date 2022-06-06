// https://www.youtube.com/watch?v=c1xTDSIXit8&t=0s&ab_channel=LamaDev
import Navbar from './../components/Navbar'
import Announcement from './../components/Announcement'
import { CssBaseline } from '@mui/material'
import Slider from '../components/Slider'
import Categories from './../components/Categories'
import Products from './../components/Products'
import Newsletter from './../components/Newsletter'
import Footer from './../components/Footer'

function Home() {
  return (
    <>
      <CssBaseline />
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
