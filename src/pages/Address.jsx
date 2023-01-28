import React, { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/address.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../store/shopping-cart/api'
import { toast } from "react-toastify";
import ShippingAddressContext from '../context/ShippingAddressProvider'


const Address = () => {

  const { setShippingAddress } = useContext(ShippingAddressContext)
  const [enterNumber, setEnterNumber] = useState('')
  const [enterCity, setEnterCity] = useState('')
  const [enterAddress, setEnterAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const cartTotalAmount = useSelector(state => state.cart.totalAmount)

  const shippingCost = 5
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const setItemFunc = (item) => {
    localStorage.setItem("shippingAddress", JSON.stringify(item));
  };


  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()

    const shippingAddress = {
      address: enterAddress,
      city: enterCity,
      postalCode: postalCode,
      phone: enterNumber,
    }
    setItemFunc(shippingAddress)
    setShippingAddress(shippingAddress)
    navigate('/checkout')
    toast.success("Address submitted successfully", { position: 'bottom-right' });
  }

  const editHandler = (e) => {
    e.preventDefault()

    const shippingAddress = {
      address: enterAddress,
      city: enterCity,
      postalCode: postalCode,
      phone: enterNumber,
    }
    setItemFunc(shippingAddress)
    setShippingAddress(shippingAddress)
    toast.success("Address edited successfully", { position: 'bottom-right' });
    navigate('/checkout')
  }

  return (
    <Helmet title='Address'>
      <CommonSection title='Address' />
      <section>
        <Container>
          <Row>
            {
              localStorage.getItem('shippingAddress') ?

                (
                  <Col lg='12' md='12'>
                    <h6 className='mb-4'>Shipping address has been submitted, you can edit it here.</h6>
                    <form className='checkout_form' onSubmit={editHandler}>
                      <div className="form_group">
                        <input type="text" placeholder='enter your address' required onChange={e => setEnterAddress(e.target.value)} minLength='10' />
                      </div>

                      <div className="form_group">
                        <input type="text" placeholder='city' required onChange={e => setEnterCity(e.target.value)} />
                      </div>

                      <div className="form_group">
                        <input type="number" placeholder='postal code' required onChange={e => setPostalCode(e.target.value)} />
                      </div>

                      <div className="form_group">
                        <input type="tel" placeholder='mobile' pattern="(09)[\d]{9}" required onChange={e => setEnterNumber(e.target.value)} minLength='11' maxLength='11' />
                        <p className='mobile_err_msg'>The phone number starts with 09 and is 11 digits long</p>
                      </div>
                      <button type='submit' className='addTOCart_btn'>Edit address and checkout</button>
                    </form>
                  </Col>
                )
                :
                (
                  <Col lg='12' md='6'>
                    <h6 className='mb-4'>Shipping Address</h6>
                    <form className='checkout_form' onSubmit={submitHandler}>
                      <div className="form_group">
                        <input type="text" placeholder='enter your address' required onChange={e => setEnterAddress(e.target.value)} minLength='10' />
                      </div>

                      <div className="form_group">
                        <input type="text" placeholder='city' required onChange={e => setEnterCity(e.target.value)} />
                      </div>

                      <div className="form_group">
                        <input type="number" placeholder='postal code' required onChange={e => setPostalCode(e.target.value)} />
                      </div>

                      <div className="form_group">
                        <input type="tel" placeholder='mobile' pattern="(09)[\d]{9}" required onChange={e => setEnterNumber(e.target.value)} minLength='11' maxLength='11' />
                        <p className='mobile_err_msg'>The phone number starts with 09 and is 11 digits long</p>
                      </div>
                      <button className='addTOCart_btn'>Submit address and checkout</button>
                    </form>
                  </Col>
                )
            }

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Address