import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import Cart from './Pages/Cart'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>

   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/wishlist' element={<Wishlist/>} />
   <Route path='/cart' element={<Cart/>} />
    <Route path='/view/:id' element={<View/>} />
    <Route path='/*' element={<Navigate to={'/'} />} />
</Routes>
   <Footer/>
    </>
  )
}

export default App
