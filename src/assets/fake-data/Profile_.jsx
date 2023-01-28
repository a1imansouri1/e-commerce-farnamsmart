import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { url } from '../../store/shopping-cart/api'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/profile.css'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Profile_ = () => {

  const [userr, setUserr] = useState('')
  const [loading, setLoading] = useState(false)

  let componentMounted = true

  useEffect(() => {
    const getProfile = async () => {
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
          setLoading(false)
          console.log(data)
          setUserr(data.user)
        }
        return () => {
          componentMounted = false
        }
      } catch (error) {
        console.log(error.response.data)
      }

    }
    getProfile()
  }, [])

  const Loading = () => {
    return (
      <section>
        <Container>
          <Row>
            <Col>
              {/* <h5 className='text-center'>Loading...</h5> */}
              <Skeleton height={350} />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  const ShowProfile = () => {

    return (
      <section>
        <Container>
          <Row>

            <div className='prof'>
              <img className='text-center cart_img-box_' src={userr.image} alt='profile-image' />
            </div>

            <Col lg='12' className='mt-5 mb-5'>

              <form className='prof_form'>
                <table className='table'>
                  <tbody>
                    <tr className='cell5'>
                      <td className='cell4 '><h6>First Name</h6></td>
                      <td className='cell6 '>{userr.firstname}</td>
                    </tr>
                    <tr className='cell5'>
                      <td className='cell4 '><h6>Last Name</h6></td>
                      <td className='cell6 '>{userr.lastname}</td>
                    </tr>
                    <tr className='cell5'>
                      <td className='cell4 '><h6>Email</h6></td>
                      <td className='cell6 '>{userr.email}</td>
                    </tr>
                    <tr className='cell5'>
                      <td className='cell4 '><h6>Phone Number</h6></td>
                      <td className='cell6 '>{userr.mobile}</td>
                    </tr>
                    <tr className='cell5'>
                      <td className='cell4 '><h6>Gender</h6></td>
                      <td className='cell6 '>{userr.gender}</td>
                    </tr>
                    <tr className='cell5'>
                      <td className='cell4 '><h6>Age</h6></td>
                      <td className='cell6 '>{userr.age}</td>
                    </tr>
                    <tr className='cell5'>
                      <td className='cell4 '><h6>City</h6></td>
                      <td className='cell6 '>{userr.city}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='chProLink'>
                  <Link to='/setting/changeProfile'>
                    <button className='addTOCart_btn'>
                      Change Profile
                    </button>
                  </Link>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

    )
  }


  return (

    loading ? <Loading /> : <ShowProfile />

  )
}
export default Profile_