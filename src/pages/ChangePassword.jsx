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

const ChangePassword = () => {

    const { setAuth } = useContext(AuthContext)
    const userRef = useRef()
    const errRef = useRef()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
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
      }, [oldPassword, newPassword])
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`${url}/user/change-password`, {
                old_password: `${oldPassword}`,
                new_password: `${newPassword}`,

            },
                {
                    headers: {
                        authorization:
                            `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            console.log(data)

            // const token = data?.user?.token
            setOldPassword('')
            setNewPassword('')
            setAuth({ oldPassword, newPassword })

            toast.success("Password changed successfully", { position: 'bottom-right' });

            // localStorage.setItem('token', token)

        } catch (err) {

            if (!err?.response) {
                setErrMsg('No Server Response (make sure VPN is off)')
            } 
            // else if (err.response?.status === 400) {
            //     setErrMsg('One of the inputs already exists')
            // }
             else {
                setErrMsg(`${err?.response.data.message}`)
            }
            errRef.current.focus();
            console.log(err.response.data)
        }
    }



    return (
        <Helmet title='setting- Change Password'>
            <CommonSection title='Change Password' />

            <section>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                <Container>
                    <Row className='res425'>
                        <Col lg='8' md='6' sm='12' className='m-auto text-center'>
                            <form className="form mb-5" onSubmit={handleSubmit} >
                                <div className="form_group">
                                    <input className='uploadAvatar' ref={userRef} type="password" placeholder='old password' onChange={(e) => setOldPassword(e.target.value)} value={oldPassword} required />
                                </div>
                                <div className="form_group">
                                    <input type="password" placeholder='new password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} required />
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

                                <h6 className='d-flex align-items-center justify-content-between mb-3'>
                                    <Link className='sidebarlink' to='/setting/changeProfile'>Change Profile</Link>
                                </h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3 sidebarhere' >
                                    <span>
                                        <Icon icon={arrowFatLineRightThin} /> Change Password
                                    </span>
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
export default ChangePassword

