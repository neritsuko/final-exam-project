import React from 'react';
import './App.css';
import Bar from './elements/navigation/bar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/store';
import Category from './pages/category';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import Footer from './elements/footer/footer'
import bookBanner from './elements/products/bannerBooks.jpg'
import vinylBanner from './elements/products/bannerVinyls.jpg'
import gameBanner from './elements/products/bannerGames.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Bar/>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/books' element={<Category banner={bookBanner} category="book"/>}/>
        <Route path='/vinyls' element={<Category banner={vinylBanner} category="vinyl"/>}/>
        <Route path='/games' element={<Category banner={gameBanner} category="game"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )

  
}

export default App;
