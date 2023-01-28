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

const Register = () => {

  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()
  const pwdErrRef = useRef()

  const [username, setUsername] = useState('')
  const [emaill, setEmaill] = useState('')

  const [pwd, setPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [pwdErrMsg, setPwdErrMsg] = useState('')

  const [mobile, setMobile] = useState('')
  const [errMsg, setErrMsg] = useState('')


  useEffect(() => {
    userRef.current.focus()
  }, [])


  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (localStorage.getItem('status_')) {
  //     navigate('/login')
  //   } else if (localStorage.getItem('token')) {
  //     navigate('/home')
  //   }
  // }, [localStorage.getItem('status_'), navigate])

  useEffect(() => {
    setErrMsg('')
  }, [username, emaill, pwd, mobile, confirmPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();


    // if (confirmPwd !== pwd) {
    //   setPwdErrMsg('password and confirm password should be same')
    // } else if (confirmPwd === pwd) {
    //   setPwdErrMsg('')
    // }
    // else if (confirmPwd === '') {
    //   setPwdErrMsg('')
    // }
    // confirmPwd !== pwd ?
    //   ('s')
    //     :
    //     (

    if (confirmPwd === pwd) {

      try {

        const { data } = await axios.post(`${url}/user/signup`, {
          username: `${username}`,
          email: `${emaill}`,
          password: `${pwd}`,
          mobile: `${mobile}`
        })
        console.log(data)

        // const status_ = data?.status
        // const token = data?.user?.token
        // const email = data?.user?.email
        setUsername('')
        setEmaill('')
        setPwd('')
        setMobile('')
        setConfirmPwd('')
        setPwdErrMsg('')
        setAuth({ username, emaill, pwd, mobile })

        toast.success("Registered successfully", { position: 'bottom-right' });

        // localStorage.setItem('status_', status_)

      } catch (err) {

        if (!err?.response) {
          setErrMsg('No Server Response (make sure VPN is off)')
        }

        else {
          setErrMsg(`${err?.response.data.message}`)

        }
        errRef.current.focus();
        console.log(err.response.data)
      }
    }
  }


  return (
    <Helmet title='Register'>
      <CommonSection title='Register' />

      <section>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="form mb-5" onSubmit={handleSubmit} >
                <div className="form_group">
                  <input ref={userRef} type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} minLength='5' required />
                </div>
                <div className="form_group">
                  <input type="email" autoComplete='off' placeholder='email' onChange={(e) => setEmaill(e.target.value)} value={emaill} required />
                </div>
                <div className="form_group">
                  <input type="password" placeholder='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                </div>
                <div className="form_group">
                  <input type="password" placeholder='confirm password'

                    onChange={(e) => {

                      setConfirmPwd(e.target.value)

                      if (e.target.value !== pwd) {
                        setPwdErrMsg('password and confirm password should be same')
                      } else if (e.target.value === pwd) {
                        setPwdErrMsg('')
                      }
                    }
                    }
                    value={confirmPwd} required />
                  <p ref={pwdErrRef} className={pwdErrMsg ? 'errmsg2 mt-2' : 'offscreen'} aria-live='assertive'>{pwdErrMsg}</p>
                </div>
                <div className="form_group">
                  <input type="tel" placeholder='mobile' onChange={(e) => setMobile(e.target.value)} value={mobile} pattern="(09)[\d]{9}" minLength='11' maxLength='11' required />
                  <p className='mobile_err_msg'>The phone number starts with 09 and is 11 digits long</p>
                </div>
                <button className='addTOCart_btn'>
                  Sign up
                </button>
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
