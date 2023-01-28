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

import { Link } from 'react-router-dom'



import "../styles/home.css"

// import ProductContext from '../context/ProductProvider' 

import productsOld from '../assets/fake-data/productsOld'

// import productsById from '../assets/fake-data/productsById';

import ProductCard from '../components/UI/product-card/ProductCard'


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


  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(productsOld);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(productsOld);
    }



    if (category === "Smartphone") {
      const filteredProducts = productsOld.filter((item) => item.category === "Smartphone");

      setAllProducts(filteredProducts);
    }

    if (category === "Airpods") {
      const filteredProducts = productsOld.filter((item) => item.category === "Airpods");

      setAllProducts(filteredProducts);
    }
    if (category === "Speaker") {
      const filteredProducts = productsOld.filter((item) => item.category === "Speaker");

      setAllProducts(filteredProducts);
    }

    if (category === "Mouse") {
      const filteredProducts = productsOld.filter((item) => item.category === "Mouse");

      setAllProducts(filteredProducts);
    }


    if (category === "Camera") {
      const filteredProducts = productsOld.filter((item) => item.category === "Camera");

      setAllProducts(filteredProducts);
    }

    if (category === "Playstation") {
      const filteredProducts = productsOld.filter((item) => item.category === "Playstation");

      setAllProducts(filteredProducts);
    }
  }, [category]);

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

                <div className="intro_btns d-flex align-items-center gap-5 mt-4 mb-5">
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

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='title_center'>Products</h2>
            </Col>

            <Col lg='12' className='catButt'>
              {/* <Col lg='12' md='6'> */}
              <div className="product_category d-flex align-items-center justify-content-center gap-4">
                <button className={`${category === 'ALL' ? 'productBtnActive' : ''}`} onClick={() => setCategory("ALL")}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Smartphone' ? 'productBtnActive' : ''}`} onClick={() => setCategory("Smartphone")}><Icon icon={phoneIcon} height='25' />Smartphone</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Airpods' ? 'productBtnActive' : ''}`} onClick={() => setCategory("Airpods")}><Icon icon={airpodsIcon} height='20' />Airpods</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Speaker' ? 'productBtnActive' : ''}`} onClick={() => setCategory("Speaker")}><Icon icon={speakerIcon} height='20' />Speaker</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Mouse' ? 'productBtnActive' : ''}`} onClick={() => setCategory("Mouse")}><Icon icon={mouseLine} height='25' />Mouse</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Camera' ? 'productBtnActive' : ''}`} onClick={() => setCategory("Camera")}><Icon icon={cameraFill} height='20' />Camera</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Playstation' ? 'productBtnActive' : ''}`} onClick={() => setCategory("Playstation")}><Icon icon={playstationIcon} height='25' />Playstation</button>
              </div>
              {/* </Col> */}
            </Col>

            {
              allProducts.map(item => (

                <Col lg='3' md='4' sm='6' xs='6' key={item._id} className='mt-5 mb-5'>
                  <ProductCard item={item} />
                </Col>

              ))
            }

          </Row>
        </Container>
      </section>
      {/* <ProductsUlt /> */}
      {/* <Products /> */}
    </Helmet>
  )


}

export default Home