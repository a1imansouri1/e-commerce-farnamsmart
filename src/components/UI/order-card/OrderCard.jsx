import React from 'react'

import '../../../styles/product-card.css'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const ProductCard = (props) => {

  const { _id, name, image, price, countInStock } = props.item
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      _id,
      name,
      image,
      price,
      countInStock
    }))
  }

  return (
    <div className='product_item'>
      <div className="product_img">
        <Link to={`/orders/${_id}`}>
          <img src={image} alt="product-img" className='product-img2' />
        </Link>
        <h5 className='pr-tit'><Link to={`/products/${_id}`}>{name}</Link></h5>
      </div>

      <div className='d-flex justify-content-between'>
        <span className='product_price'>${price} </span>
        <span>
          <button className='addTOCart_btn' onClick={addToCart}>Add to Cart</button>
        </span>
      </div>
    </div>
  )
}

export default ProductCard