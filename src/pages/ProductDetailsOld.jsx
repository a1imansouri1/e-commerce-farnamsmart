import React, { useState, useEffect, useContext } from 'react'

// import ProductContext from '../context/ProductProvider' 

import productsOld from '../assets/fake-data/productsOld'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

import '../styles/product-details.css'

import ProductCard from '../components/UI/product-card/ProductCard'

import axios from 'axios'

import { Icon } from '@iconify/react';
import trashIcon from '@iconify/icons-bi/trash';
import addLine from '@iconify/icons-ri/add-line';
import subtractLine from '@iconify/icons-ri/subtract-line';
import starIcon from '@iconify/icons-mdi/star';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductDetails = () => {


    const { _id } = useParams();
    // const [product, setProduct] = useState([])

    // const [loading, setLoading] = useState(false)

    // let componentMounted = true

    // useEffect(() => {
    //     const getProducts = async () => {
    //         setLoading(true)
    //         try {
    //             const { data } = await axios.get(`http://kzico.runflare.run/product/${_id}`)
    //             if (componentMounted) {
    //                 setProduct(data)
    //                 setLoading(false)
    //             }
    //             return () => {
    //                 componentMounted = false
    //             }
    //         } catch (error) {
    //             console.log(error.response.data)
    //         }

    //     }
    //     getProducts()
    // }, [])

    const dispatch = useDispatch()

    // const [previewImg, setPreviewImg] = useState(product.image)
    // const { name, price, image, category, rating, countInStock, totalPrice } = product
    const product = productsOld.find((product) => product._id === _id);
    const [previewImg, setPreviewImg] = useState(product.image)
    const { name, price, image, category, rating, countInStock, totalPrice, desc } = product

    //   const relatedProduct = products.filter(item => category === item.category)

    const addItem = () => {
        dispatch(cartActions.addItem({
            _id,
            name,
            price,
            image,
            countInStock
        }))
    }
    const cartProducts = useSelector(state => state.cart.cartItems)
    const quantity = cartProducts.map((item) => item.quantity)

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

    useEffect(() => {
        setPreviewImg(product.image)
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

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

    const Loading = () => {
        return (
            <section>
                <Container>
                    <Row>
                        <Col>
                            {/* <h5 className='text-center'>Loading...</h5> */}
                            <Skeleton height={350} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

    return (


        <Helmet title='Product-details'>
            <CommonSection title={name} />
            {
                // loading ? <Loading /> :

                <section>
                    <Container>
                        <Row>
                            <Col lg='2' md='2'>

                            </Col>

                            <Col lg='4' md='4'>
                                <div>
                                    <div className="product_main-imgOld">
                                        <img src={previewImg} alt="prImg" />
                                    </div>
                                </div>
                            </Col>

                            <Col lg='6' md='6'>
                                <div className="single_product-content">
                                    <h6 className='catg_'>{category}</h6>
                                    <br />
                                    <h2 className='product_title'>{name}</h2>
                                    <br />
                                    {
                                        countInStock ?
                                            (<>
                                                <p className='rating_'>Rating {rating} <Icon icon={starIcon} color="#ff9529" inline={true} /></p>
                                                <p className="product_price">
                                                    {' '}
                                                    <span>${price}</span>
                                                </p>
                                            </>)
                                            :
                                            ''
                                    }

                                    <div>
                                        <span className='description'>Description:</span>
                                        <p className='desc_'>
                                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum odit nobis et molestias nihil vel aliquid odio dolore blanditiis facere excepturi accusamus labore velit error rem, ipsum eveniet provident. */}
                                            {desc}
                                        </p>
                                    </div>
                                    {
                                        countInStock ?
                                            (
                                                <>
                                                    <p className='countInStock'>Quantity in stock: {countInStock}</p>
                                                    < button onClick={addItem} className="addTOCart_btn">Add to Cart</button>

                                                </>
                                            )
                                            :
                                            <span className='outOfStock'>Out of stock</span>
                                    }

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
        </Helmet >
    )
}

export default ProductDetails