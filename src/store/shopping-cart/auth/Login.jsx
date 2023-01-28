import React, { useState, useEffect, useRef } from 'react'
import Helmet from '../../../components/Helmet/Helmet'

import CommonSection from '../../../components/UI/common-section/CommonSection'
// import { StyledForm } from "./StyledForm";

import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../../styles/login.css'
import { loginUser } from '../authSlice'
// import { viewUser } from '../authSlice'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import axios from 'axios'
// import { url } from '../api'

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  console.log(auth)
  

  const navigate = useNavigate()

  useEffect(() => {
    if (auth.token) {
      navigate('/home')
    }
  }, [auth.token, navigate])

  

  //   const refreshPage = ()=>{
  //     window.location.reload();
  //  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));

    // errRef.current.focus();

    // try {
    //   const { data } = await axios.post(`${url}/user/login`, {
    //     'email': `${user.email}`,
    //     'password': `${user.password}`
    //   })
    //   console.log(data)
    //   setSuccess(true)
    //   localStorage.setItem('token', data.user.token)
    //   localStorage.setItem('email', data.user.email)
    // } catch (err) {

    //   if (!err?.response) {
    //     setErrMsg('No Server Response')
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('Missing Email or Password')
    //   } else if (err.response?.status === 401) {
    //     setErrMsg('Email or Password is incorrect')
    //   } else {
    //     setErrMsg('Login Failed')
    //   }
    //   errRef.current.focus();
    //   console.log(err.response.data)
    // }
  }

  

  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />

      <section>
        {/* <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p> */}
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="form mb-5" onSubmit={handleSubmit} >
                <div className="form_group">
                  <input type="email" autoComplete='off' placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                </div>
                <div className="form_group">
                  <input type="password" placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                </div>
                
                  <button className='addTOCart_btn'>
                    Login
                  </button>

{/* 
              {auth.message === 'pending' ? 'submitting' : 'Login'}  */}
              {auth.message === 'rejected' ? <p>error</p> : null}

              </form>

              {/* <StyledForm onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button>
                  {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
                </button>
                {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
              </StyledForm> */}
              <Link className='link_register' to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}
export default Login

// {success ? (
//   <section>
//     {/* {reloadFunc()} */}
//     <h1>You are logged in!</h1>
//     <br />
//     <p>
//       <Link className='link_register' to='/'>Go to Home</Link>
//     </p>
//   </section>
// ) 
