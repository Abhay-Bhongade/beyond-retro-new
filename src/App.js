import React from 'react'
import { Route, Routes } from "react-router-dom"
import CompoWrapper from './Pages/CompoWrapper'
import Login from './Pages/Login'
import WishList from './Pages/WishList'
import Nike from './Pages/Nike'
import "./App.css"
import ShoppingBag from './Pages/ShoppingBag'
import Twenty from './Pages/Twenty'
import Product from './Pages/Product.jsx'
import Products from './Pages/Products.jsx'
import Navbar from './Pages/Navbar'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CompoWrapper />} />
        <Route path='/products/' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App

