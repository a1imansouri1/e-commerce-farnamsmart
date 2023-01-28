import React, { useEffect } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'

import Carts from '../UI/cart/Carts'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../store/shopping-cart/authSlice'

const Layout = () => {

  const showCart = useSelector(state => state.cartUi.cartIsVisible)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser(null))
  }, [dispatch]);

  return (
    <div>
      <ToastContainer />
      <Header />

      {
        showCart && <Carts />
      }


      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default Layout