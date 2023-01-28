import React from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'

import Home from '../pages/Home'
// import Home from '../pages/HomeOld'


import AllProducts from '../pages/AllProducts'
// import AllProducts from '../pages/AllProductsOld'


import Cart from '../pages/Cart'

import ProductDetails from '../pages/ProductDetails'
// import ProductDetails from '../pages/ProductDetailsOld'


import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Orders from '../pages/Orders'
import OrdersDetails from '../pages/OrdersDetails'

import NotFound from '../pages/NotFound'
import ChangeProfile from '../pages/ChangeProfile' 
import ChangePassword from '../pages/ChangePassword'
import UploadAvatar from '../pages/UploadAvatar'
import Address from '../pages/Address'
// import GetAllProducts from '../assets/fake-data/product_'

const Routers = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path= '/checkout' element={localStorage.getItem('token') ? <Checkout /> : <Home />} />
      <Route path= '/address' element={localStorage.getItem('token') ? <Address /> : <Home />} />
      <Route path='/profile' element={localStorage.getItem('token') ? <Profile /> : <Home />} />
      <Route path='/orders' element={localStorage.getItem('token') ? <Orders /> : <Home />} />
      <Route path='/orders/:_id' element={localStorage.getItem('token') ? <OrdersDetails /> : <Home />} />
      
      <Route path='/setting/changeProfile' element={localStorage.getItem('token') ? <ChangeProfile /> : <Home />} />
      <Route path='/setting/changePassword' element={localStorage.getItem('token') ? <ChangePassword/> : <Home />} />
      <Route path='/setting/uploadAvatar' element={localStorage.getItem('token') ? <UploadAvatar/> : <Home />} />
      <Route path='/products' element={<AllProducts />} />
      <Route path="/products/:_id" element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={localStorage.getItem('token') ? <Home /> : <Login />} />
      <Route path='/register' element={localStorage.getItem('token') ? <Home /> : <Register />} />
      {/* <Route path='/checkout' element={<Checkout />} /> */}

      <Route path="*" element={<NotFound />} />

      {/* <Route path='/product_' element={<GetAllProducts />} /> */}
    

      {/* <Route path='/login' element={<Login />} />
      <Route path='/viewprofile' element={<ViewProfile />} /> */}
      
      {/* <Route to="/not-found" /> */}
    </Routes>

  );
};

export default Routers