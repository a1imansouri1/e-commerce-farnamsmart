import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
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

// import productById from './productsById';

import '../../styles/home.css'
import { useParams } from 'react-router-dom';


const Products = () => {

    // const [productId, setProductId] = useState()
    // // const [data0, setData0] = useState([])
    // useEffect(() => {
    //     const getId = async () => {
    //         setLoading(true)

    //         const { data } = await fetch(`${url}/product/`)
    //         if (componentMounted) {
    //             // setData0(await response.clone().json())
    //             // setFilter(await response.json())
    //             // setLoading(false)
    //             // set_id(data[0]._id)
    //             setProductId(data[0]._id)
    //         }
    //         return () => {
    //             componentMounted = false
    //         }
    //     }
    //     getId()
    // }, [])


    // const _id = [
    //     '636b5fc219fe6e277f57ed80',
    //     '636bf21c19fe6e277f57f91d',
    //     '636bf23c19fe6e277f57f921',
    //     '636bf2da19fe6e277f57f92d',
    //     '636bf32e19fe6e277f57f934',
    //     '636bf37b19fe6e277f57f938',
    //     '636bf41919fe6e277f57f943',
    //     '636bf5a119fe6e277f57f954',
    //     '636bf5fd19fe6e277f57f95a',
    //     '636bf64219fe6e277f57f95e',
    //     '636bf68519fe6e277f57f963',
    //     '636bf8a619fe6e277f57f976',
    //     '636bf8fd19fe6e277f57f97a',
    //     '636bf90e19fe6e277f57f97e',
    //     '636bf95419fe6e277f57f982',
    //     '636bfb4819fe6e277f57f9b4',
    //     '636bfb5e19fe6e277f57f9b8',
    //     '636bfbb619fe6e277f57f9bd',
    //     '636bfc1719fe6e277f57f9c3',
    //     '636bfca019fe6e277f57f9c9',
    //     '636bfd4f19fe6e277f57f9cd',
    //     '636bffc219fe6e277f57f9f1',
    //     '636c005c19fe6e277f57f9f7',
    //     '636c042c19fe6e277f57fa2e',
    //     '6373bd048b27af4124061dc5',
    // ]

    const [deals, setDeals] = useState([])
    // const [deals, setDeals] = useState(null)
    // const [deals, setDeals] =useRef(null)

    // const [deals, setDeals] = useState(([]) => {
    //     axios.get('http://kzico.runflare.run/product/')
    //       .then(res => setDeals(res.data))
    //  });

    const [filter, setFilter] = useState(deals)
    const [loading, setLoading] = useState(false)

    // const [_id, set_id] = useState(data[0])
    // const [productId, setProductId] = useState([])

    let componentMounted = true
    // https://fakestoreapi.com/products
    useEffect(() => {
        const getPr = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get('http://kzico.runflare.run/product/')
                if (componentMounted) {
                    setDeals(data)
                    setFilter(data)
                    setLoading(false)
                    console.log(deals)
                }
                return () => {
                    componentMounted = false
                }
            } catch (error) {
                console.log(error.response.data)
            }

        }
        getPr()
    }, [])




    // useEffect(() => {
    //     setLoading(true)
    //     axios({
    //         method: 'GET',
    //         url: 'http://kzico.runflare.run/product/636b5fc219fe6e277f57ed80'
    //     }).then(res => {
    //         setDeals(res.data)
    //         setLoading(false)
    //     })
    // }, [setDeals])

    //     useEffect(() => {

    //             setLoading(true)
    //             getProducts()
    //             setFilter(deals)

    //     }, [setDeals])

    //     async function getProducts() {
    //         const api = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    //         const result = await fetch(api)
    //         const getResult = await result.json()
    //         setLoading(false)
    //         setDeals(getResult)
    //     }

    // console.log(deals)

    // const { id } = useParams()
    // const urll = 'http://kzico.runflare.run/product/'
    // const [productt, setProductt] = useState({
    //     loadingg: false,
    //     dataa: null,
    //     error: false
    // })


    // let content = null

    // useEffect(() => {
    //     setProductt({
    //         loadingg: true,
    //         dataa: null,
    //         error: false
    //     })
    //     axios.get(urll)
    //         .then(response => {
    //             setProductt({
    //                 loadingg: false,
    //                 dataa: response.data,
    //                 error: false
    //             })
    //         })
    //         .catch(() => {
    //             setProductt({
    //                 loadingg: false,
    //                 dataa: null,
    //                 error: true
    //             })
    //         })
    // }, [urll])








    // console.log(filter)

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    // const filterProduct = (cat) => {
    //     const updatedList = data.filter((x) => x.category === cat)
    //     setFilter(updatedList)
    // }


    const ShowProducts = () => {
        return (
            <>

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
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product._id}>
                                        <img class="card-img-top" src={product.image} alt={product.title} height='300px' />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.name.substring(0, 12)}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>


            //         {
            //     filter.map((product) => {

            //         <>
            //             <div>
            //                 <div>
            //                     <img src={product.image} />
            //                     <div>
            //                         <h5>{product.tilte}</h5>
            //                         <p>${product.price}</p>
            //                         <a href="#">Go Somewhere</a>
            //                     </div>
            //                 </div>
            //             </div>
            //         </>
            //     }
            //     )
            // }





        )
    }
    // const ddu = () => {
    //     return (

    //         <Container>
    //             <Row>

    //                 <Col>
    //                     {
    //                         <div>
    //                             <h5>{data[0].name}</h5>
    //                             <p>${data[0].price}</p>
    //                             <a href="#">Go Somewhere</a>
    //                         </div>
    //                     }
    //                 </Col>
    //             </Row>
    //         </Container>


    //     )
    // }

    return (


        <section>

            {/* <button>{_id}</button> */}

            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='title_center'>Products</h2>
                    </Col>

                    {loading ? <Loading /> : <ShowProducts />}
                    {/* <ShowProducts /> */}
                    {/* <ShowProducts /> */}
                    {/* <productById /> */}

                </Row>
            </Container>
        </section>
    )
}

export default Products