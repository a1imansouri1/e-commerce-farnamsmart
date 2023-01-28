import React, { useState, useEffect, useContext } from 'react';

import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import '../styles/intro-section.css'

import { Icon } from '@iconify/react';
import arrowDropRightLine from '@iconify/icons-ri/arrow-drop-right-line';
import shieldCheckLine from '@iconify/icons-ri/shield-check-line';
import cameraFill from '@iconify/icons-ri/camera-fill';
import phoneIcon from '@iconify/icons-gridicons/phone';
import speakerIcon from '@iconify/icons-bi/speaker';
import mouseLine from '@iconify/icons-ri/mouse-line';
import playstationIcon from '@iconify/icons-bi/playstation';
import airpodsIcon from '@iconify/icons-icon-park-outline/airpods';

// import { productsApi } from '../store/shopping-cart/productsApi';
// import { useGetAllProductsQuery } from '../store/shopping-cart/productsApi';

import { Link } from 'react-router-dom'



import "../styles/home.css"

// import ProductContext from '../context/ProductProvider' 

// import Products from '../assets/fake-data/products'

// import productsById from '../assets/fake-data/productsById';

// import ProductCard from '../components/UI/product-card/ProductCard'


import TestimonialSlider1 from '../components/UI/slider/TestimonialSlider1';

// import { useSelector, useDispatch } from 'react-redux';

// import { productsFetch } from '../store/shopping-cart/productsSlice';

// import axios from 'axios';
// import { url } from '../store/shopping-cart/api';

// import products from '../assets/fake-data/products__';

// import ProductsUlt from '../assets/fake-data/ProductsUlt';
import Products from '../assets/fake-data/Products';

const Home = () => {






  // const { items: products, status } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // const { data, error, isLoading } = useGetAllProductsQuery()
  //   console.log(data)

  // const [ product_ ] = useContext(ProductContext)


  // const [category, setCategory] = useState("ALL");
  // const [allProducts, setAllProducts] = useState(products);

  // useEffect(() => {
  //   if (category === "ALL") {
  //     setAllProducts(products);
  //   }



  //   if (category === "gaming console") {
  //     const filteredProducts = products.filter((item) => item.category === "gaming console");

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "Keyboard") {
  //     const filteredProducts = products.filter((item) => item.category === "Keyboard");

  //     setAllProducts(filteredProducts);
  //   }
  //   if (category === "mouse") {
  //     const filteredProducts = products.filter((item) => item.category === "mouse");

  //     setAllProducts(filteredProducts);
  //   }

  // if (category === "Speaker") {
  //   const filteredProducts = data.filter((item) => item.category === "Speaker");

  //   setAllProducts(filteredProducts);
  // }


  // if (category === "Camera") {
  //   const filteredProducts = data.filter((item) => item.category === "Camera");

  //   setAllProducts(filteredProducts);
  // }

  // if (category === "Playstation") {
  //   const filteredProducts = data.filter((item) => item.category === "Playstation");

  //   setAllProducts(filteredProducts);
  // }
  // }, [category]);
  // })

  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='intro_content'>
                <h5 className='mb-3'>Order from any location</h5>
                <h1 className='mb-4 intro_title'><span>Save your time</span><br /><span>Delivery to your doorstep</span></h1>

                <p>FarnamSmart provides smartphone, airpods, mouse, camera and playstation.
                  <br /> You can buy quality smartphones and latest tech products at great prices.</p>

                <div className="intro_btns d-flex align-items-center gap-5 mt-4">
                  <Link to='/products'>
                    <button className='order_btn d-flex align-items-center justify-content-between'>
                      Order now<Icon icon={arrowDropRightLine} width='24' />
                    </button>
                  </Link>
                  <div className='intro_service align-items-center gap-5 mt-3'>
                    <p><span className='check_icon-span'><Icon className='check_icon' icon={shieldCheckLine} /> 100% secure checkout</span></p>
                  </div>
                </div>

              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='testimonial'>
                <TestimonialSlider1 />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* <section> */}

      {/* <Products /> */}
      {/* </section> */}

      {/* <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='title_center'>Products</h2>
            </Col>

            <Col lg='12'>
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button className={`${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("ALL")}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'gaming console' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("gaming console")}><Icon icon={phoneIcon} height='25' />gaming console</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Keyboard' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Keyboard")}><Icon icon={airpodsIcon} height='20' />Keyboard</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'mouse' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("mouse")}><Icon icon={mouseLine} height='25' />mouse</button>
                {/* <button className={`d-flex align-items-center gap-2 ${category === 'Speaker' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Speaker")}><Icon icon={speakerIcon} height='20' />Speaker</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Camera' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Camera")}><Icon icon={cameraFill} height='20' />Camera</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Playstation' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Playstation")}><Icon icon={playstationIcon} height='25' />Playstation</button> */}
      {/* </div> */}
      {/* </Col> */}

      {/* {
              allProducts.map(item => (

                <Col lg='3' md='4' sm='6' xs='6' key={item._id} className='mt-5 mb-5'>
                  <ProductCard item={item} />
                </Col>

              ))
            } */}

      {/* </Row> */}
      {/* </Container> */}
      {/* </section> */}
      {/* <ProductsUlt /> */}
      <Products />
    </Helmet>
  )


}

export default Home