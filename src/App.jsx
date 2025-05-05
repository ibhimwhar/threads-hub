import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Shop from './pages/Shop'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Footer from './component/Footer'
import NotFound from './component/NotFound'

const App = () => {
  return (
    <main className='bg-[#f1f5f9] text-[#0f172a]'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </main>
  )
}

export default App
