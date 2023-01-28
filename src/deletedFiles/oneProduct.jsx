import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/UI/product-card/ProductCard'
import { url } from '../../store/shopping-cart/api'
import { Icon } from '@iconify/react';
import arrowDropRightLine from '@iconify/icons-ri/arrow-drop-right-line';
import shieldCheckLine from '@iconify/icons-ri/shield-check-line';
import cameraFill from '@iconify/icons-ri/camera-fill';
import phoneIcon from '@iconify/icons-gridicons/phone';
import speakerIcon from '@iconify/icons-bi/speaker';
import mouseLine from '@iconify/icons-ri/mouse-line';
import playstationIcon from '@iconify/icons-bi/playstation';
import airpodsIcon from '@iconify/icons-icon-park-outline/airpods';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'



import '../../styles/home.css'


const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    const [_id, set_id] = useState(0)

    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)

            const response = await fetch(`${url}/product/`)
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)

                // var data_ = response
                // for (let i=0; i<data_.length; i++) {
                //     set_id(data_[i]._id)  
                // }

                set_id(data[0]._id)
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts()
    }, [])


console.log(data)

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

     
    const ShowProducts = () => {
        return (
            <Col lg='12'>
                <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button  >All</button>
                <button className={`d-flex align-items-center gap-2 `} ><Icon icon={phoneIcon} height='25' />gaming console</button>
                <button className={`d-flex align-items-center gap-2 `} ><Icon icon={airpodsIcon} height='20' />Keyboard</button>
                <button className={`d-flex align-items-center gap-2 `} ><Icon icon={mouseLine} height='25' />mouse</button>
                    {/* <button className={''} onClick={() => {
                        (setFilter(data))
                        console.log(filter)
                    }}>All</button>
                    <button className={'d-flex align-items-center gap-2 '} onClick={() => {
                        filterProduct("gaming console")
                        console.log(filter)
                    }}><Icon icon={phoneIcon} height='25' />gaming console</button>
                    <button className={'d-flex align-items-center gap-2 '} onClick={() => {
                        filterProduct("Keyboard")
                        console.log(filter)
                    }}><Icon icon={airpodsIcon} height='20' />Keyboard</button>
                    <button className={'d-flex align-items-center gap-2 '} onClick={() => {
                        filterProduct("mouse")
                        console.log(filter)
                    }}><Icon icon={mouseLine} height='25' />mouse</button> */}
                </div>

                {
                    filter.map((product) => {
                        <>
                            <div>
                                <div>
                                    <img src='https://dkstatics-public.digikala.com/digikala-products/66f8e6e62dff684345c94eb6cf9feeb7fb0669e3_1662628950.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
                                    <div>
                                        <h5>{product.name}</h5>
                                        <p>${product.price}</p>
                                        <a href="#">Go Somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </Col>
        )
    }

    
    return (

        
        <section>

            <button>{_id}</button>

            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='title_center'>Products</h2>
                    </Col>

                    {loading ? <Loading /> : <ShowProducts />}


                </Row>
            </Container>
        </section>
    )
}

export default Products