import React from 'react'

import '../../../styles/product-card.css'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'
// const {_id, title, price, image, category, color, rating, brand, countInStock} = data_[1]
import { toast } from "react-toastify";

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
    } 
    ))
    toast.success(`${name} added to Cart`, { position: 'bottom-right' });
  }

var fpFix = function (n) {
  return Math.round(n * 100) / 100;
};


return (
  <div className='product_item'>
    <div className="product_img">
      <Link to={`/products/${_id}`}>
        <img src={image} alt="product-img" className='product-img2' />
      </Link>
      <h5 className='pr-tit'><Link to={`/products/${_id}`}>{name}</Link></h5>
    </div>

    {
      countInStock ?
        (
          <div className='praddBtn d-flex justify-content-between'>
            <>
              <span className='product_price'>${fpFix(price)} </span>
              <span>
                <button className='addTOCart_btn' onClick={addToCart}>Add to Cart</button>
              </span>
            </>
          </div>
        )
        :

        (
          <div className='outOfStockdiv'>
            <span className='outOfStock'>Out of stock</span>
          </div>
        )
    }
  </div>
)
}

export default ProductCard