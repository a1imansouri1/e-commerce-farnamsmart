import React from 'react'

import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'

import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-ri/close-fill';


import '../../../styles/shopping-cart.css'

const Carts = () => {

  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  // const totalAmount2 = localStorage.getItem('totalAmount')
  // const cartItems2 = localStorage.getItem('cartItems')

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  var fpFix = function (n) {
    return Math.round(n * 100) / 100;
  };

  return (
    <div className='cart_container'>
      <div className='close_outside' onClick={toggleCart}>
      </div>
      <ListGroup className='cart'>
        <div className='cart_close'>
          <span className='cart_close-icon' onClick={toggleCart}><Icon icon={closeFill} /></span>
        </div>

        <div className='cart_item-list'>

          {
            localStorage.getItem('totalAmount') !== null ?
              (
                cartProducts.length === 0 ? (<h6 className='empty_cart text-center mt-5'>No item added to the cart</h6>) :
                  (cartProducts.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))
                  )
              )
              :
              ('')
          }
        </div>
        {/* {
          localStorage.getItem('token') ? (
            <Link to='/checkout'><button className="addTOCart_btn">Checkout</button></Link>
            ) : (
            <Link to='/login'><button className="addTOCart_btn">Login to checkout</button></Link>
            )
          } */}

        <div className='cart_bottom d-flex align-items-center justify-content-between'>
          {
            localStorage.getItem('totalAmount') ?
              (
                <>
                  <h6>Subtotal : <span>${fpFix(totalAmount)}</span></h6>

                  {
                    localStorage.getItem('token') ?
                      (
                        localStorage.getItem('shippingAddress') ?
                          (<button><Link to='/checkout'>Checkout</Link></button>)
                          :
                          (<button><Link to='/address'>Submit shipping address</Link></button>)
                      )
                      :
                      (
                        <button className='subcon'><Link to='/login'>To submit order, please Login first</Link></button>
                      )
                  }
                </>
              )
              :
              ('')
          }

          {/* {
            localStorage.getItem('token') ? (
              <button><Link to='/checkout'>Checkout</Link></button>
              ) : (<button><Link to='/login'>Login to checkout</Link></button>)
            } */}
        </div>
      </ListGroup>
    </div>
  )
}

export default Carts