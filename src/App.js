import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Cart from './components/Cart/Cart'
import Login from './components/LoginForm/Login'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'

function App() {

  // API fetches
  useEffect(() => {
    fetch('/react-ecommerce/api/products.json')
      .then(res => res.json())
      .then(res => setProducts(res));
  }, []);

  useEffect(() => {
    fetch(`/react-ecommerce/api/categories.json`)
      .then(res => res.json())
      .then(res => setCategories(res));
  }, [])

  // ---
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    setItemNumber(cart.length);
  }, [cart]);


  // cart items
  function AddCartItem(item) {
    setCart((prevCart) => [...prevCart, item]);
    setItemNumber((itemNumber) => itemNumber + 1)

  };

  function RemoveItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setItemNumber((itemNumber) => itemNumber - 1);
  }


  return (
    <div className='kanit-regular'>
      <Header itemNumber={itemNumber} setSearchQuery={setSearchQuery} className='w-screen' />
      <Routes>
        <Route path="" element={<Home products={products} categories={categories} searchQuery={searchQuery} />} />
        <Route path="/category/:categoryId" element={<Home products={products} categories={categories} searchQuery={searchQuery} />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart cart={cart} RemoveItem={RemoveItem} setCart={setCart} setItemNumber={setItemNumber} />} />
        <Route path="/products/:id" element={<ProductDetail
          AddCartItem={AddCartItem}
          cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App