import React, { useState, useEffect, useContext } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

import { Container, Row, Col } from 'reactstrap'

// import ProductContext from '../context/ProductProvider' 

// import products from '../assets/fake-data/products'

import ProductCard from '../components/UI/product-card/ProductCard'
import ReactPaginate from 'react-paginate'

import '../styles/all-products.css'
import '../styles/pagination.css'

import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-ri/search-line';
import cameraFill from '@iconify/icons-ri/camera-fill';
import phoneIcon from '@iconify/icons-gridicons/phone';
import speakerIcon from '@iconify/icons-bi/speaker';
import mouseLine from '@iconify/icons-ri/mouse-line';
import playstationIcon from '@iconify/icons-bi/playstation';
import airpodsIcon from '@iconify/icons-icon-park-outline/airpods';

// import ProductsUlt from '../assets/fake-data/ProductsUlt'

import Products from '../assets/fake-data/Products'

const AllProducts = () => {


  // const [ product_ ] = useContext(ProductContext)
  // const [category, setCategory] = useState("ALL");
  // var [displayPage, setAllProducts] = useState(products);

  // useEffect(() => {
  //   if (category === "ALL") {
  //     setAllProducts(products);
  //   }

  //   if (category === "Smartphone") {
  //     const filteredProducts = products.filter((item) => item.category === "Smartphone");

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "Airpods") {
  //     const filteredProducts = products.filter((item) => item.category === "Airpods");

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "Speaker") {
  //     const filteredProducts = products.filter((item) => item.category === "Speaker");

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "Mouse") {
  //     const filteredProducts = products.filter((item) => item.category === "Mouse");

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "Camera") {
  //     const filteredProducts = products.filter((item) => item.category === "Camera");

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "Playstation") {
  //     const filteredProducts = products.filter((item) => item.category === "Playstation");

  //     setAllProducts(filteredProducts);
  //   }
  // }, [category]);

  // const [searchTerm, setSearchTerm] = useState('')
  // const [pageNumber, setPageNumber] = useState(0)

  // const searchedProduct = displayPage.filter(item => {

  //   if (searchTerm.value === '') return item
  //   if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  //     return item
  // })

  // const productPerPage = 12
  // const visitedPage = pageNumber * productPerPage
  // var displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

  // const pageCount = Math.ceil(searchedProduct.length / productPerPage)

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected)
  // }

  return (


    <Helmet title='Products'>
      <CommonSection title='Products' />
      <Products />

      {/* <section> */}
      {/* <Container> */}
      {/* <Row> */}
      {/* <Col lg='12' md='12' sm='12' xs='12'>
              <div className="search_widget d-flex align-items-center">
                <input type="text" placeholder="I'm looking for ..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <span><Icon icon={searchLine} height='20'/></span>
              </div>
            </Col>
            
            <Col lg='12'>
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button className={`${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("ALL")}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Smartphone' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Smartphone")}><Icon icon={phoneIcon} height='25' />Smartphone</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Airpods' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Airpods")}><Icon icon={airpodsIcon} height='20' />Airpods</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Speaker' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Speaker")}><Icon icon={speakerIcon} height='20' />Speaker</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Mouse' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Mouse")}><Icon icon={mouseLine} height='25' />Mouse</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Camera' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Camera")}><Icon icon={cameraFill} height='20' />Camera</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Playstation' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Playstation")}><Icon icon={playstationIcon} height='25' />Playstation</button>
              </div>
            </Col> */}


      {/* {
              displayPage
                .map(item => (<Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>{' '}<ProductCard item={item} /></Col>))
            } */}

      {/* <div>
              <ReactPaginate pageCount={pageCount} onPageChange={changePage} previousLabel='Prev' nextLabel='Next' containerClassName='paginationBttns' />
            </div> */}
      {/* </Row> */}

      {/* </Container> */}
      {/* </section> */}
    </Helmet>
  )
}

export default AllProducts