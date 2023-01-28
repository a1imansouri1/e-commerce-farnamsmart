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
import { useParams } from 'react-router-dom';


const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)

    const [loading, setLoading] = useState(false)

    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get('http://kzico.runflare.run/product/')
                if (componentMounted) {
                    setData(data)
                    setFilter(data)
                    setLoading(false)
                    console.log(data)
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


    const [category, setCategory] = useState('All')

    const cat1 = []
    data.map((item) => cat1.push(item.category))
    const cat2 = [...new Set(cat1)]
    const value = 'mouse'
    const cat3= cat2.filter((item) => item !== value)

    
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        if (cat === 'All') {
            setFilter(data)
            setCategory('All')
        } else {
            setFilter(updatedList)
            setCategory(cat)
        }
    }

    

    const Loading = () => {
        return (
            <section>
                <Container>
                    <Row>
                        <Col>
                            {/* <h5 className='text-center'>Loading...</h5> */}
                            <Skeleton height={350} />
                        </Col>
                        <Col>
                            {/* <h5 className='text-center'>Loading...</h5> */}
                            <Skeleton height={350} />
                        </Col>
                        <Col>
                            {/* <h5 className='text-center'>Loading...</h5> */}
                            <Skeleton height={350} />
                        </Col>
                        <Col>
                            {/* <h5 className='text-center'>Loading...</h5> */}
                            <Skeleton height={350} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }



    const ShowProducts = () => {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='title_center'>Products</h2>
                        </Col>



                        <Col lg='12'>

                            <div className="product_category d-flex align-items-center justify-content-center gap-4">
                                <button className={`${category === 'All' ? 'productBtnActive' : ''}`} onClick={() => (filterProduct('All'))}>All</button>
                                {cat3.map((item) => {
                                    return (
                                        <button className={`${category === item ? 'productBtnActive' : ''}`} onClick={() => (filterProduct(item))}>{item}</button>
                                    )
                                })}
                            </div>
                            {/* <div className="product_category d-flex align-items-center justify-content-center gap-4">
                                <button className={`${category === 'All' ? 'productBtnActive' : ''}`} onClick={() => (filterProduct('All'))}>All</button>
                                <button className={`${category === 'Keyboard' ? 'productBtnActive' : ''}`} onClick={() => { (filterProduct('Keyboard')) }}>Keyboard</button>
                                <button className={`${category === 'Mouse' ? 'productBtnActive' : ''}`} onClick={() => { (filterProduct('Mouse')) }}>Mouse</button>
                            </div> */}
                        </Col>

                        {
                            filter.map((item) => {
                                return (
                                    <Col lg='3' md='4' sm='6' xs='6' key={item._id} className=' mt-3 mb-5'>
                                        <ProductCard item={item} />
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </section>

        )
    }


    return (

        loading ? <Loading /> : <ShowProducts />

    )
}
export default Products