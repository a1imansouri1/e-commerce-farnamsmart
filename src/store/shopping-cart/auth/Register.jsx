import React, { useRef, useState } from 'react'
import Helmet from '../../../components/Helmet/Helmet'
import CommonSection from '../../../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { registerUser } from '../authSlice' 

const Register = () => {

  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  console.log(auth)


  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    mobile: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(registerUser(user))
    // try {
    //   const { data } = await axios.post(`${url}/user/signup`, {
    //     username: user.username,
    //     email: user.email,
    //     password: user.password,
    //     mobile: user.mobile
    //   }
    //   )
    //   console.log(data)
    // } catch (error) {
    //   console.log(error.response.data)
    // }
  }


  return (
    <Helmet title='Signup'>
      <CommonSection title='Signup' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="form mb-5" onSubmit={handleSubmit} >
                <div className="form_group">
                  <input type="text" placeholder='Username' onChange={(e) => setUser({ ...user, username: e.target.value })} required />
                </div>
                <div className="form_group">
                  <input type="email" placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                </div>
                <div className="form_group">
                  <input type="password" placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                </div>
                <div className="form_group">
                  <input type="number" placeholder='Phone Number' onChange={(e) => setUser({ ...user, mobile: e.target.value })} required />
                </div>
                <button type='submit' className='addTOCart_btn'>Sign Up</button>
              </form>
              <Link className='link_register' to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register