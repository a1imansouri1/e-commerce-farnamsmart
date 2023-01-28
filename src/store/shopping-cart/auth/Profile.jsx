import React, { useState, useEffect, useRef } from 'react'
import Helmet from '../../../components/Helmet/Helmet'

import CommonSection from '../../../components/UI/common-section/CommonSection'
// import { StyledForm } from "./StyledForm";

import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../../styles/login.css'
import { getUser } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    age: '',
    city: '',
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
    dispatch(getUser(user));
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
    <Helmet title='Profile'>
      <CommonSection title='Profile' />

      <section>
        {/* <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p> */}
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="form mb-5" onSubmit={handleSubmit} >
                <div className="form_group">
                  <input type="text" placeholder='Firstname' onChange={(e) => setUser({ ...user, firstname: e.target.value })} required />
                </div>
                <div className="form_group">
                  <input type="text" placeholder='Lastname' onChange={(e) => setUser({ ...user, lastname: e.target.value })} required />
                </div>
                <div className="form_group">
                </div>
                <div className="form_group">
                  <input type="text" placeholder='Gender' onChange={(e) => setUser({ ...user, gender: e.target.value })} required />
                </div>
                <div className="form_group">
                  <input type="number" placeholder='Age' onChange={(e) => setUser({ ...user, age: e.target.value })} required />
                </div>
                <div className="form_group">
                  <input type="text" placeholder='City' onChange={(e) => setUser({ ...user, city: e.target.value })} required />
                </div>


                <button type='submit' className='addTOCart_btn'>
                  Change Profile
                </button>

                {/* 
              {auth.message === 'pending' ? 'submitting' : 'Login'}  */}
                {/* {auth.message === 'rejected' ? <p>error</p> : null} */}

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
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}
export default Profile

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
