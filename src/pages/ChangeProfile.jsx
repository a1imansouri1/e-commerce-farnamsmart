import React, { useState, useEffect, useRef, useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/ChangeProfile.css'
import axios from 'axios'
import { url } from '../store/shopping-cart/api'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

import { Icon } from '@iconify/react';
import arrowFatLineRightThin from '@iconify/icons-ph/arrow-fat-line-right-thin';

const ChangeProfile = () => {

    const { setAuth } = useContext(AuthContext)
    const userRef = useRef()
    const errRef = useRef()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [errMsg, setErrMsg] = useState('')


    useEffect(() => {
        userRef.current.focus()
    }, [])


    const navigate = useNavigate()

    // useEffect(() => {
    //     if (localStorage.getItem('status_')) {
    //         navigate('/login')
    //     } else if (localStorage.getItem('token')) {
    //         navigate('/home')
    //     }
    // }, [localStorage.getItem('status_'), navigate])

    useEffect(() => {
        setErrMsg('')
    }, [firstname, lastname, gender, age, city])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`${url}/user/change-profile`, {
                firstname: `${firstname}`,
                lastname: `${lastname}`,
                gender: `${gender}`,
                age: `${age}`,
                city: `${city}`,
            },
                {
                    headers: {
                        authorization:
                            `Bearer ${localStorage.getItem('token')}`
                    }
                })


            console.log(data)

            // const status_ = data?.status
            // const token = data?.user?.token
            setFirstname('')
            setLastname('')
            setGender('')
            setAge('')
            setCity('')
            setAuth({ firstname, lastname, gender, age, city })

            toast.success("Profile changed successfully", { position: 'bottom-right' });

            // localStorage.setItem('status_', status_)
            // localStorage.setItem('token', token)

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



    return (
        <Helmet title='setting- change profile'>
            <CommonSection title='Change Profile' />

            <section>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                <Container>
                    <Row className='res425'>
                        <Col lg='8' md='6' sm='12' className='m-auto text-center'>
                            <form className="form mb-5" onSubmit={handleSubmit} >
                                <div className="form_group">
                                    <input ref={userRef} type="text" placeholder='first name' onChange={(e) => setFirstname(e.target.value)} value={firstname} required />
                                </div>
                                <div className="form_group">
                                    <input type="text" placeholder='last name' onChange={(e) => setLastname(e.target.value)} value={lastname} required />
                                </div>
                                <div className="form_group">
                                    <input type="text" placeholder='gender' onChange={(e) => setGender(e.target.value)} value={gender} required />
                                </div>
                                <div className="form_group">
                                    <input type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} value={age} required />
                                </div>
                                <div className="form_group">
                                    <input type="tel" placeholder='city' onChange={(e) => setCity(e.target.value)} value={city} required />
                                </div>
                                <button className='addTOCart_btn'>
                                    Done
                                </button>
                            </form>
                        </Col>

                        <Col lg='4 class' md='6' className='res430Col'>
                            <div className='checkout_bill'>
                                <h5 className='setsidebar'>
                                    Setting
                                </h5>
                                <br />
                                <h6 className='d-flex align-items-center justify-content-between mb-3 sidebarhere'>
                                    <span>
                                        <Icon icon={arrowFatLineRightThin} /> Change Profile
                                    </span>
                                </h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>
                                    <Link className='sidebarlink' to='/setting/changePassword'>Change Password</Link>
                                </h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3 '>
                                    <Link className='sidebarlink ' to='/setting/uploadAvatar'>Upload Avatar</Link>
                                </h6>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}
export default ChangeProfile

