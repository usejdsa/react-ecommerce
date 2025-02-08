import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Cart from './components/Cart/Cart'
import Login from './components/LoginForm/Login'
import Header from './components/Shared/Header'

function App() {
  return <div>
    <div className='underline'>App</div>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetail />} />

      </Routes>
    </HashRouter>
  </div>
}

export default App