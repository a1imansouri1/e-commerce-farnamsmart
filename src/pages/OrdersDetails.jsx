import React, { useState, useEffect, useContext } from 'react'

// import ProductContext from '../context/ProductProvider' 

// import products from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

import '../styles/product-details.css'

import ProductCard from '../components/UI/product-card/ProductCard'

import axios from 'axios'

import { Icon } from '@iconify/react';
import trashIcon from '@iconify/icons-bi/trash';
import addLine from '@iconify/icons-ri/add-line';
import subtractLine from '@iconify/icons-ri/subtract-line';

import '../styles/order-details.css'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const OrdersDetails = () => {


    const { _id } = useParams();
    const [product, setProduct] = useState([])

    const [loading, setLoading] = useState(false)
    const [orderItems, setOrderItems] = useState([])

    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`http://kzico.runflare.run/order/${_id}`, {
                    headers: {
                        authorization:
                            `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                if (componentMounted) {
                    setProduct(data)
                    setLoading(false)
                    setOrderItems(data.orderItems)
                    // console.log(data)
                }
                return () => {
                    componentMounted = false
                }
            } catch (error) {
                console.log(error.response.data)
            }

        }
        getProducts()
    }, [])
    console.log(orderItems)

    const dispatch = useDispatch()
    const { totalPrice } = product

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

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


        <Helmet title='Order-details'>
            <CommonSection title='Order Details' />
            {
                loading ? <Loading /> :

                    <section>
                        <Container>
                            <Row>
                                <Col lg='12' className='text-center mb-3'>
                                    <h2 className='title_center'>Order Details</h2>
                                </Col>
                                <Col lg='12'>
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                {/* <th className='cell1 text-center'>Item</th> */}
                                                <th className='cell1 text-center'>Image of products ordered</th>
                                                <th className='cell1 text-center'>Name of products ordered</th>
                                                <th className='cell1 text-center'>Color</th>
                                                <th className='cell1 text-center'>Price</th>
                                                <th className='cell1 text-center'>Quantity</th>
                                                <th className='cell1 text-center'>Total price</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                orderItems.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <td className='text-center cella'>
                                                                <img height='50px' src={item.product.image} alt="prImg" />
                                                            </td>
                                                            <td className='cella text-center'>{item.product.name}</td>
                                                            <td className='cella text-center'>{item.product.color}</td>
                                                            <td className='cella text-center'>${fpFix(item.product.price)}</td>
                                                            <td className='cella text-center'>{item.qty}</td>
                                                            <td className='cella text-center'>${(fpFix(item.product.price)) * (item.qty)}</td>
                                                        </tr>
                                                    )
                                                }
                                                )
                                            }


                                        </tbody>
                                    </table>
                                    <div className='mt-4'>
                                        <h6 className='cart_subtotal'>Subtotal: <span>${fpFix(totalPrice)}</span></h6>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>
            }
        </Helmet >
    )
}

export default OrdersDetails