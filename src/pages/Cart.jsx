import React, { useEffect, useState, useContext } from 'react'

import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/cart-page.css';
import '../styles/cart-item.css'


import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'

import { Icon } from '@iconify/react';
import trashIcon from '@iconify/icons-bi/trash';
import addLine from '@iconify/icons-ri/add-line';
import subtractLine from '@iconify/icons-ri/subtract-line';

import { cartActions } from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'

import ShippingAddressContext from '../context/ShippingAddressProvider';
import { toast } from "react-toastify";
import CartItemsContext from '../context/CartItemsProvider';

const Cart = () => {

  const { shippingAddress1 } = useContext(ShippingAddressContext)
  var fpFix = function (n) {
    return Math.round(n * 100) / 100;
  };

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const cartItems2 = localStorage.getItem('cartItems')

  return (
    <Helmet title='Cart'>
      <CommonSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItems?.length === 0 ? (<h5 className='text-center'>Your cart is empty</h5>) :
                  (<>


                    <table className='table table-bordered tableCart'>
                      <thead>
                        <tr>
                          <th className='cell1 text-center'>Image</th>
                          <th className='cell1 text-center'>Product Title</th>
                          <th className='cell1 text-center'>Price</th>
                          <th className='cell1 text-center'>Quantity in Stock</th>
                          <th className='cell1 text-center'>Quantity</th>
                          <th className='cell1 text-center'>Total Price</th>
                          <th className='cell1 text-center'>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <Tr item={item} key={item.id} />
                        ))}
                      </tbody>
                    </table>


                    <div className='mt-4'>
                      <h6 className='cart_subtotal'>Subtotal: <span>${fpFix(totalAmount)}</span></h6>
                      <div className='cart_page-btn'>
                        {
                          localStorage.getItem('token') ?
                            (
                              localStorage.getItem('shippingAddress') ?
                                (<Link to='/checkout'><button className="addTOCart_btn">Checkout</button></Link>)
                                :
                                (<Link to='/address'><button className="addTOCart_btn">Submit shipping address</button></Link>)
                            )
                            :
                            (
                              <Link to='/login'><button className="addTOCart_btn">To submit order, please Login first</button></Link>
                            )
                        }
                      </div>
                    </div>
                  </>
                  )
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = props => {

  const { _id, image, name, price, quantity, totalPrice, countInStock } = props.item
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(_id))
    toast.warning(`${name} removed from Cart`, { position: 'bottom-left' })
  }

  const incrementItem = () => {
    dispatch(cartActions.addItem({
      _id,
      name,
      price,
      image,
      countInStock
    }))
  }

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(_id))
  }


  const [reached, setReached] = useState(true)
  // const countInStock_ = countInStock - 1
  // const quantityM = quantity - 1

  useEffect(() => {
    setReached(true)
    if ({ quantity } < { countInStock }) {
      setReached(false)
    }
  })

  var fpFix = function (n) {
    return Math.round(n * 100) / 100;
  };

  return <tr>
    <td className='text-center cart_img-box'>
      <Link to={`/products/${_id}`}>
        <img className='prImgCart' src={image} alt="product-img" />
      </Link>

    </td>
    <td className='cell2 text-center'>
      <Link className='titCart' to={`/products/${_id}`}>
{/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate esse porro repellendus illum placeat non consequatur quos recusandae. Pariatur iure consectetur quaerat quia assumenda recusandae adipisci quasi repellendus, minima maxime. */}
{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur debitis voluptate corrupti itaque omnis ab dolor ullam? Eum consequuntur accusamus voluptas dolores officia a nisi odit eos delectus commodi! */}
        {name}
      </Link>
    </td>
    <td className='cell2 text-center'>${fpFix(price)}</td>
    <td className='cell2 text-center'>{countInStock}</td>
    <td className='cell2 text-center'>

      {{ reached } ?
        (
          quantity !== 1 ?

            (
              quantity !== countInStock ?
                (<div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
                  <span className='decrease_btn' onClick={decreaseItem}><Icon className='decrease_btn_icon_' icon={subtractLine} /></span>
                  <span className='quantity'>{quantity}</span>
                  <span className='increase_btn' onClick={incrementItem}><Icon className='increase_btn_icon_' icon={addLine} /></span>
                </div>) :
                (
                  <div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
                    <span className='decrease_btn' onClick={decreaseItem}><Icon className='decrease_btn_icon_' icon={subtractLine} /></span>
                    <span className='quantity'>{quantity}</span>
                    <span className='increase_btn_qtycoSt'><Icon icon={addLine} /></span>
                  </div>
                )
            ) : (
              <div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
                <span className='decrease_btn_qty1'><Icon icon={subtractLine} /></span>
                <span className='quantity'>{quantity}</span>
                <span className='increase_btn' onClick={incrementItem}><Icon className='increase_btn_icon_' icon={addLine} /></span>
              </div>
            )
        )
        :
        (
          ''
        )
      }
    </td>

    <td className='cell3 text-center'>${fpFix(totalPrice)}</td>

    <td className='cell2 text-center'>
      <span className='cart_item-del'>
        <Icon icon={trashIcon} onClick={deleteItem} />
      </span>
    </td>

  </tr>
}

export default Cart