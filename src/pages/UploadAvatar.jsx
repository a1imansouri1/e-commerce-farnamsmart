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
import Form from 'react-bootstrap/Form';


const ChangePassword = () => {

    const { setAuth } = useContext(AuthContext)
    const errRef = useRef()
    const [pic, setPic] = useState(null)
    const [errMsg, setErrMsg] = useState('')



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
    }, [pic])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('profile-image', pic)
        try {
            const { data } = await axios.post(`${url}/user/profile-image`,
                formData,
                {
                    headers: {
                        authorization:
                            `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            console.log(data)
            toast.success("Avatar uploaded successfully", { position: 'bottom-right' });

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
        <Helmet title='setting- Upload Avatar'>
            <CommonSection title='Upload Avatar' />

            <section>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                <Container>
                    <Row className='res425'>


                        <Col lg='8' md='6' sm='12' className='m-auto text-center'>
                            <form className="form mb-5" onSubmit={handleSubmit} >
                                {/* <div className="form_group">
                                    <input className='uploadAvatar' type="file" placeholder='Upload Avatar' onChange={(e) => setPic(e.target.files[0])} required />
                                </div>
                                <button className='addTOCart_btn'>
                                    Upload File
                                </button> */}
                                <Form.Label>Please Choose a file</Form.Label>
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Control type="file" size="lg" onChange={(e) => setPic(e.target.files[0])} required />
                                    <br />
                                    <button className='addTOCart_btn'>
                                        Upload File
                                    </button>
                                </Form.Group>
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
                                <h6 className='d-flex align-items-center justify-content-between mb-3' >
                                    <Link className='sidebarlink ' to='/setting/changePassword'>Change Password</Link>
                                </h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3 sidebarhere'>
                                    <span>
                                        <Icon icon={arrowFatLineRightThin} /> Upload Avatar
                                    </span>
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

