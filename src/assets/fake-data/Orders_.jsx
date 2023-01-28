import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import ProductCard from '../../components/UI/product-card/ProductCard'
import { url } from '../../store/shopping-cart/api'
import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-ri/search-line';
import arrowDropRightLine from '@iconify/icons-ri/arrow-drop-right-line';
import shieldCheckLine from '@iconify/icons-ri/shield-check-line';
import cameraFill from '@iconify/icons-ri/camera-fill';
import phoneIcon from '@iconify/icons-gridicons/phone';
import speakerIcon from '@iconify/icons-bi/speaker';
import mouseLine from '@iconify/icons-ri/mouse-line';
import playstationIcon from '@iconify/icons-bi/playstation';
import airpodsIcon from '@iconify/icons-icon-park-outline/airpods';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import ReactPaginate from 'react-paginate'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// import productById from './productsById';

import '../../styles/home.css'
import { useParams, Link } from 'react-router-dom';

import '../../styles/order.css'

const Orders_ = () => {

    const errRef = useRef()
    const [errMsg, setErrMsg] = useState('')

    // const [dataa, setDataa] = useState([])
    const [dataaaa, setDataaa] = useState([])
    const [orderItems_, setOrderItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [exist, setExist] = useState(true)
    const [x, setX] = useState([])

    let componentMounted = true

    useEffect(() => {
        const getOrders = async () => {
            setLoading(true)
            setExist(false)
            try {
                const { data } = await axios.get(`${url}/order/`,
                    {
                        headers: {
                            authorization:
                                `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                if (componentMounted) {
                    const dataa = data
                    setDataaa(data)
                    setLoading(false)
                    setExist(true)
                    const array = []
                    for (let i = 0; i < dataa.length; i++) {
                        array.push(dataa[i].orderItems)
                    }
                    setOrderItems(array)
                    const z = []
                    for (let i = 0; i < array.length; i++) {
                        const y = array[i]
                        for (let j = 0; j < y.length; j++) {
                            z.push(y[j])
                        }
                    }
                    setX(z)
                }
                return () => {
                    componentMounted = false
                    setExist(false)
                }
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
        getOrders()
    }, [])
    // console.log(x)
    console.log(dataaaa)

    const Loading = () => {
        return (
            <section>
                {
                    errMsg ? (
                        <h5 ref={errRef} className='text-center'>{errMsg}</h5>
                    ) :
                        (

                            <Container>
                                <Row>
                                    <Col>
                                        {/* <h5 className='text-center'>Loading...</h5> */}
                                        <Skeleton height={350} />
                                    </Col>
                                </Row>
                            </Container>
                        )
                }
            </section>
        )
    }

    var fpFix = function (n) {
        return Math.round(n * 100) / 100;
    };

    const ShowProducts = () => {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='title_center'>Orders</h2>
                        </Col>

                        <Col lg='12'>

                            <form className='prof_form_'>
                                <table className='table tableO'>
                                    <thead className='cell4444_'>
                                        <tr >
                                            <th className='cell444_ text-center'><h6>Item</h6></th>
                                            <th className='cell444_ text-center'><h6>Products ordered</h6></th>
                                            <th className='cell444_ text-center'><h6>Total price</h6></th>
                                            <th className='cell444_ text-center'><h6>Order details</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            dataaaa.map((item, index) => {

                                                return (
                                                    <tr className='cell55_'>
                                                        <td className='cell66_'>
                                                            <Link to={`/orders/${item._id}`}>
                                                                {index + 1}
                                                            </Link>
                                                        </td>

                                                        <td className='cell66_'>
                                                            {item.orderItems.
                                                                map((itemn, indexn) => {
                                                                    return (
                                                                        <td >
                                                                            {/* <span className='orderImg gap-3'> */}
                                                                            <Container>
                                                                                <Row>
                                                                                    <Col lg='12'>
                                                                                        <img className='ordImgI gap-5' height='50px' src={itemn.product.image} alt="prdImg" />
                                                                                    </Col>
                                                                                </Row>
                                                                            </Container>
                                                                            {/* </span> */}
                                                                        </td>
                                                                    )
                                                                }
                                                                )
                                                            }
                                                        </td>
                                                        <td className='cell66_'>${fpFix(item.totalPrice)}</td>

                                                        <td className='cell66_'>
                                                            <Link to={`/orders/${item._id}`}>
                                                                <button className='addTOCart_btn9'>
                                                                    Details
                                                                </button>
                                                            </Link>
                                                        </td>

                                                        {/* <td>
                                                            {item.orderItems.
                                                                map((itemn, indexn) => {
                                                                    return (
                                                                        <tr>
                                                                            {itemn.product.name}
                                                                        </tr>
                                                                    )
                                                                }
                                                                )
                                                            }
                                                        </td> */}
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </form>
                        </Col>

                    </Row>
                </Container>
            </section>

        )
    }


    return (
        exist ?
            (loading ? <Loading /> : <ShowProducts />)
            :
            (loading ? <Loading /> : <h5 className='text-center'>No order submitted</h5>)

    )
}
export default Orders_