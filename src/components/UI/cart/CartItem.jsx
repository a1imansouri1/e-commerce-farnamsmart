import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Icon } from '@iconify/react';
import addLine from '@iconify/icons-ri/add-line';
import subtractLine from '@iconify/icons-ri/subtract-line';
import trashIcon from '@iconify/icons-bi/trash';


import '../../../styles/cart-item.css'

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


const CartItem = ({ item }) => {



  const { _id, name, price, image, quantity, totalPrice, countInStock } = item
  const dispatch = useDispatch()

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

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(_id))
    toast.warning(`${name} removed from Cart`, { position: 'bottom-left' })

  }

  var fpFix = function (n) {
    return Math.round(n * 100) / 100;
  };

  return (

    <table className='table'>
      <tbody>
        <br />
        <tr className='tr1'>
          <Link to={`/products/${_id}`}>
            <td className='text-center cart_img-box1'><img src={image} alt="product-img" /></td>
          </Link>

          <td className='cell44 text-center'>

            <Link to={`/products/${_id}`}>
              <h6 className='cart_product-title'>{name}</h6>
            </Link>

            <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity}x <span>${fpFix(price)}</span></p>

            {
              quantity !== 1 ?
                (
                  quantity !== countInStock ?
                    (<div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
                      <span className='decrease_btn' onClick={decreaseItem}><Icon className='decrease_btn_icon_' icon={subtractLine} /></span>
                      <span className='quantity'>{quantity}</span>
                      <span className='increase_btn' onClick={incrementItem}><Icon className='increase_btn_icon_' icon={addLine} /></span>
                    </div>) : (
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
            }

          </td>
          <td className='cell33 text-center'>${fpFix(totalPrice)}</td>
          <td className='cell22 text-center'>
            <span className='cart_item-del'>
              <Icon icon={trashIcon} onClick={deleteItem} />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CartItem