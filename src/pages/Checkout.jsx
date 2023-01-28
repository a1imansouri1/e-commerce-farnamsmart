import React, { useState, useRef, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/checkout.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../store/shopping-cart/api'
import { toast } from "react-toastify";

import ShippingAddressContext from '../context/ShippingAddressProvider'
import CartItemsContext from '../context/CartItemsProvider';
import TotalQuantityContext from '../context/TotalQuantityProvider'
import TotalAmountContext from '../context/TotalAmountProvider'

import {cartActions} from '../store/shopping-cart/cartSlice'

const Checkout = () => {

  const errRef = useRef()

  const [errMsg, setErrMsg] = useState('')

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };


  const { shippingAddress1 } = useContext(ShippingAddressContext)
  // const { setCartItems } = useContext(CartItemsContext)
  // const { setTotalQuantity } = useContext(TotalQuantityContext)
  // const { setTotalAmount } = useContext(TotalAmountContext)

  const shipAddress = JSON.parse(localStorage.getItem("shippingAddress"))


  const cartTotalAmount = useSelector(state => state.cart.totalAmount)

  const cartItems = useSelector(state => state.cart.cartItems)



  const shippingCost = 5
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const renamedObj = (obj, newKeys) => renameKeys(obj, newKeys);
  function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }



  const orderItems1 = cartItems.map(item => renamedObj(Object.assign({}, [`${item._id}`, item.quantity]), { 0: 'product', 1: 'qty' }))



  const navigate = useNavigate()

  console.log(orderItems1)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        `${url}/order/submit`,
        {
          orderItems: orderItems1
          ,
          shippingAddress: shipAddress,
          paymentMethod: "cash",
          shippingPrice: `${shippingCost}`,
          totalPrice: totalAmount,
        },
        {
          headers: {
            authorization:
              `Bearer ${localStorage.getItem('token')}`
          }
        }
      )

      handleClearCart();

      navigate('/home')
      console.log(data)
      toast.success("Your order submitted successfully", { position: 'bottom-right' });

      // setCartItems(localStorage.removeItem('cartItems'))
      // setTotalQuantity(localStorage.removeItem('totalQuantity'))
      // setTotalAmount(localStorage.removeItem('totalAmount'))

      // localStorage.removeItem('cartItems')
      // localStorage.removeItem('totalAmount')
      // localStorage.removeItem('totalQuantity')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response (make sure VPN is off)')
      }
      else {
        setErrMsg(`${err?.response.data.message}`)
        console.log(errMsg)
      }
      console.log(err.response.data)
    }
  }

  var fpFix = function (n) {
    return Math.round(n * 100) / 100;
  };

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>

        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>

        <Container>
          <Row>
            <Col lg='8' md='6'>


              <form className='checkoutt_form' onSubmit={submitHandler}>

                <table className='table table_'>
                  <tbody>
                    <tr className='cell55'>
                      <h6 className='cell77 mb-4'>Shipping Address</h6>
                    </tr>
                    <tr className='cell55 '>
                      <td className='cell44 '>
                        <h6>Address:</h6>
                        <td className='cell66'>{shipAddress.address}</td>
                      </td>
                    </tr>
                    <tr className='cell55'>
                      <td className='cell44 '>
                        <h6>City:</h6>
                        <td className='cell66'>{shipAddress.city}</td>
                      </td>
                    </tr>
                    <tr className='cell55'>
                      <td className='cell44 '>
                        <h6>Postal Code:</h6>
                        <td className='cell66'>{shipAddress.postalCode}</td>
                      </td>
                    </tr>
                    <tr className='cell55'>
                      <td className='cell44 '>
                        <h6>Phone Number:</h6>
                        <td className='cell66'>{shipAddress.phone}</td>
                      </td>
                    </tr>

                  </tbody>
                </table>
                <div className='d-flex align-items-center justify-content-center mb-2 edAddbtn'>

                  <Link to='/address'>
                    <button type='submit' className='addTOCart_btn'>Edit shipping address</button>
                  </Link>

                </div>

              </form>
            </Col>

            <Col lg='4 class' md='6' className='chSub'>

              <form className='checkouttt_form' onSubmit={submitHandler}>
                <div className='checkout_bill'>
                  <h6 className='subtotal_ d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${fpFix(cartTotalAmount)}</span></h6>
                  <h6 className='subtotal_ d-flex align-items-center justify-content-between mb-3'>Shipping: <span>${fpFix(shippingCost)}</span></h6>
                  <div className='checkout_total'>
                    <h5 className='subtotal__ d-flex align-items-center justify-content-between'>Total: <span className='total_checkout'>${fpFix(totalAmount)}</span></h5>
                  </div>

                  <br />

                  <div className='d-flex align-items-center justify-content-between mb-0'>
                    <span>
                      <button type='submit' className='addTOCart_btn'>Submit order</button>
                    </span>
                    <span>
                      <Link to='/cart'>
                        <button type='submit' className='addTOCart_btn'>Edit cart</button>
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
              <form className='checkouttt_form mt-2' onSubmit={submitHandler}>
                <div className='checkout_billl'>
                  <h6 className='cell77 mb-5'>Your order</h6>

                  {
                    cartItems.map((item, index) =>
                      <h6 className='subtotal_ d-flex align-items-center justify-content-between mb-3 gap-4'>
                        <span className='indexx'>{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        {item.name}
                        <span>{fpFix(item.quantity)}px</span>
                        <span>${fpFix(item.totalPrice)}</span>
                      </h6>
                    )
                  }

                </div>
              </form>
            </Col>


            {/* <Col lg='12'>
            <table className='table'>
              <tbody>
                <tr lang="en" className='cc w-100' height="700px">
                  <td>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </td>
                </tr>
              </tbody>
            </table>
            </Col> */}


          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout