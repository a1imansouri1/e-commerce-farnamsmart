import React, { useState, useEffect, useRef, useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios'
import { url } from '../store/shopping-cart/api'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

import { useDispatch } from 'react-redux'
import { authActions } from '../store/shopping-cart/authSlice2'

const Login = () => {

  const dispatch2 = useDispatch();
  const handleAddToken = () => {
    dispatch2(authActions.addToken());
  };

  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [email2, setEmail2] = useState('')

  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    userRef.current.focus()
  }, [])


  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home')
    }
  }, [localStorage.getItem('token'), navigate])

  useEffect(() => {
    setErrMsg('')
  }, [user, email2, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${url}/user/login`, {
        'email': `${user || email2}`,
        'password': `${pwd}`
      })
      console.log(data)

      const token = data?.user?.token
      const email = data?.user?.email
      const userImg = data?.user?.image

      // handleAddToken()

      setUser('')
      setEmail2('')
      setPwd('')
      setAuth({ user, pwd, token, userImg })

      toast.success("Logged in successfully", { position: 'bottom-right' });
      localStorage.setItem('userImg', userImg)
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)

    } catch (err) {

      if (!err?.response) {
        setErrMsg('No Server Response (make sure VPN is off)')
      }
      // else if (err.response?.status === 400) {
      //   setErrMsg('Missing Email or Password')
      // } else if (err.response?.status === 401) {
      //   setErrMsg('Email or Password is incorrect')
      // } 
      else {
        setErrMsg(`${err?.response.data.message}`)
      }
      errRef.current.focus();
      console.log(err.response.data)
    }
  }



  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />

      <section>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="form mb-5" onSubmit={handleSubmit} >
                <div className="form_group">
                  <input ref={userRef} type="text" autoComplete='off' placeholder='email or username'

                    onChange={(e) => {
                      setUser(e.target.value)
                      setEmail2(e.target.value)
                    }
                    }

                    value={user} required />

                </div>
                <div className="form_group">
                  <input type="password" placeholder='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                </div>
                <button className='addTOCart_btn'>
                  Login
                </button>
              </form>
              {
                // localStorage.getItem('status_') ? null 
                // :
                (
                  <Link className='link_register' to='/register'>Don't have an account? Register</Link>
                )
              }
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}
export default Login

