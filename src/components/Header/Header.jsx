import React, { useRef, useEffect, useState, useContext } from 'react'
import AuthContext from '../../context/AuthProvider';

import { Container } from 'reactstrap';
import logo from '../../assets/images1/logo.png'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from '@iconify/react';

import shoppingBasketLine from '@iconify/icons-ri/shopping-basket-line';
import userLine from '@iconify/icons-ri/user-line';
import menuLine from '@iconify/icons-ri/menu-line';

import uiUserProfileOutline from '@iconify/icons-healthicons/ui-user-profile-outline';
import orderDetails from '@iconify/icons-carbon/order-details';
import settingsIcon from '@iconify/icons-carbon/settings';
import logoutCircleLine from '@iconify/icons-ri/logout-circle-line';

import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'


import '../../styles/header.css'
import { logoutUser } from '../../store/shopping-cart/authSlice_';
import { toast } from "react-toastify";
// import styled from "styled-components";

import axios from 'axios';
import { url } from '../../store/shopping-cart/api';

import Dropdown from 'react-bootstrap/Dropdown';

import { authActions } from '../../store/shopping-cart/authSlice2';
// import jwtDecode from 'jwt-decode';

const navLinks = [
  {
    navId: 1,
    display: 'Home',
    path: '/home'
  },
  {
    navId: 2,
    display: 'Products',
    path: '/products'
  },
  {
    navId: 3,
    display: 'Cart',
    path: '/cart'
  },
]


const Header = () => {

  const dispatch2 = useDispatch();
  const handleClearToken = () => {
    dispatch2(authActions.clearToken());
  };

  const [email2, setEmail2] = useState('')
  const [loading, setLoading] = useState(false)
  let componentMounted = true


  const { setAuth } = useContext(AuthContext)
  const { auth } = useContext(AuthContext)


  const auth_ = useSelector((state) => state.auth_)
  const dispatch1 = useDispatch()

  // const [state, setState] = useState()

  // const GetProfile = async () => {
  //   try {
  //     const { data } = await axios.get(`${url}/user/profile`, {
  //       headers: {
  //         authorization:
  //           `Bearer ${localStorage.getItem('token')}`
  //       },
  //     })
  //     data.setState()
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err.response.data)
  //   }
  // }



  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        headerRef.current.classList.add('header_shrink')
      } else {
        headerRef.current.classList.remove('header_shrink')
      }
    })

    return () => window.removeEventListener('scroll', null)

  }, [])



  useEffect(() => {
    const getPrf = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`${url}/user/profile`,
          {
            headers: {
              authorization:
                `Bearer ${localStorage.getItem('token')}`
            }
          })

        if (componentMounted) {
          localStorage.setItem('token', data.user.token)
          setLoading(false)
          setEmail2(data.user.email)
          console.log(data)
        }
        return () => {
          componentMounted = false
        }
      } catch (error) {
        if (error.response?.status === 500) {
          // setLoading(true)
          setAuth({'token': ''})
          handleClearToken()
        }
        // localStorage.removeItem('token')
        console.log(error.response.data)
      }
    }
    getPrf()
  }, [])


  const BasicExample = () => {
    return (
      // localStorage.getItem("token") ?
      // !loading ?
      (
        <div className='divlist'>
          <Dropdown className='list1'>
            <Dropdown.Toggle variant="" className='dropdown1' >
              {
                <>
                  <div className='d-flex align-item-center gap-2'>
                    <img className='userImg' src={localStorage.getItem('userImg')} alt="i" />
                    {/* <img className='userImg' src='https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png' alt="i" /> */}
                    <span className='emailU'>
                      {localStorage.getItem('email')}

                    </span>
                  </div>
                </>
              }

              {/* Dropdown Button */}
            </Dropdown.Toggle>
            <Dropdown.Menu className='list1 m-0' align="end" >
              <Link to={'/profile'}>
                <Dropdown.Item as='button' className='list2'>
                  <span><Icon className='drIcon' icon={uiUserProfileOutline} height='25px' width='25px' /> Profile</span>
                </Dropdown.Item>
              </Link>
              <Link to='/orders'>
                <Dropdown.Item as='button' className='list2'>
                  <span><Icon className='drIcon' icon={orderDetails} height='25px' width='25px' /> Orders</span>
                </Dropdown.Item>
              </Link>
              <Link to='/setting/changeProfile'>
                <Dropdown.Item as='button' className='list2'>
                  <span><Icon className='drIcon' icon={settingsIcon} height='25px' width='25px' /> Setting</span>
                </Dropdown.Item>
              </Link>

              <Dropdown.Item as='button' className='list2' onClick={() => {
                dispatch1(logoutUser(null))
                toast.warning('Logged out', { position: 'bottom-left' })
              }}>
                <span><Icon className='drIcon' icon={logoutCircleLine} height='25px' width='25px' /> Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown >
        </div>
      )
      // :
      // (<Link to='/login'>
      //   <Icon className='user' icon={userLine} color='191b4b' />
      // </Link>)
    );
  }



  // const totalQuantity2 = localStorage.getItem('totalQuantity')
  // const cartItems2 = localStorage.getItem('cartItems')

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between" >
          <div className="logo">
            <Link to={'/home'}>
              <img src={logo} alt='logo' />
            </Link>
          </div>

          {/* _menu_ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center">

              {
                navLinks.map((item, navId) => (<NavLink to={item.path} key={navId} className={navClass => navClass.isActive ? "active_menu" : ""}>{item.display}</NavLink>))
              }

            </div>
          </div>

          {/* _nav right icons_ */}
          <div className="nav_right d-flex">
            <span className='cart_icon' onClick={toggleCart}>
              <Icon className='cart_icon_Icon' icon={shoppingBasketLine} inline={true} />

              <span className='cart_badge'>{totalQuantity}</span>
              {/* {
                localStorage.getItem('totalQuantity') ?
                  :
                  (<span className='cart_badge'>0</span>)
              } */}
            </span>
            {/* <span className='drbase'> */}
            <div className='basicExample_'>

              {
                localStorage.getItem("token") ?
                // !loading ?
                  <BasicExample />
                  :
                  (<Link to='/login'>
                    <Icon className='user' icon={userLine} color='191b4b' />
                  </Link>)}
              {/* <BasicExample /> */}
            </div>

            {/* </span> */}
            <span>

              {/* {
                localStorage.getItem('token') ? `${localStorage.getItem('email')}` :
                  (<Link to='/login'>
                    <Icon className='user' icon={userLine} inline={true} color='191b4b' />
                  </Link>)
              } */}





              {/* {auth.token ? (
                <Logout
                  onClick={() => {
                    dispatch(logoutUser(null));
                    // toast.warning("Logged out!", { position: "bottom-left" });
                  }}
                >
                  Logout
                </Logout>
              ) : (
                <AuthLinks>
                  <Link to="/login">Login</Link>
                  <Link to="register">Register</Link>
                </AuthLinks>
              )} */}

            </span>

            {/* <span>
              <Link to='/profile'>
                Profile
              </Link>

            </span>
            <span>
              <Link to='/viewprofile'>
                viewProfile
              </Link>

            </span> */}

            <span className="mobile_menu" onClick={toggleMenu}>
              <Icon icon={menuLine} inline={true} color='191b4b' />
            </span>
          </div>

        </div>
      </Container>

    </header>
  )
}

export default Header

// const AuthLinks = styled.div`
//   a {
//     &:last-child {
//       margin-left: 2rem;
//     }
//   }
// `;

// const Logout = styled.div`
//   color: white;
//   cursor: pointer;
// `;