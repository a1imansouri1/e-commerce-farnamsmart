import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout'
import { loadUser } from './store/shopping-cart/authSlice_'

import { useContext } from 'react'
import AuthContext from './context/AuthProvider';
import ShippingAddressContext from './context/ShippingAddressProvider';
import CartItemsContext from './context/CartItemsProvider';

function App() {

  const { setAuth } = useContext(AuthContext)
  const { setShippingAddress } = useContext(ShippingAddressContext)
  const { CartItems1 } = useContext(CartItemsContext)

  const auth_ = useSelector((state) => state.auth_)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser(null))
  }, [dispatch]);

  return <Layout />
}

export default App;
