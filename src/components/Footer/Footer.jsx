import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images1/logo.png'

import '../../styles/footer.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import facebookFill from '@iconify/icons-ri/facebook-fill';
import githubLine from '@iconify/icons-ri/github-line';
import youtubeLine from '@iconify/icons-ri/youtube-line';
import linkedinFill from '@iconify/icons-ri/linkedin-fill';





const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>

          <Col lg='6' md='6' sm='6'>
            <div className="footer_logo d-flex align-items-center gap-5 text-start">
              <img src={logo} alt='logo' />
              <p>Tehran, Iran</p>
            </div>
          </Col>




          <Col lg='6' md='6' sm='6'>
            <div className='contact_item-list'>
              <h5 className='footer_title'>Contact</h5>
              <ListGroup className='cont_inf'>

                <ListGroupItem className='contact-item border-0 ps-0'>
                  <span>Phone: +989013608275</span>
                </ListGroupItem>

                <ListGroupItem className='contact-item border-0 ps-0'>
                  <span>Email: ali.mansouri0901@yahoo.com</span>
                </ListGroupItem>

                <ListGroupItem className='contact-item border-0 ps-0 mt-3'>
                  <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                    <p className='follow m-0'>Follow: </p>
                    {/* <span>
                      {" "}
                      <a href='https://www.facebook.com' target='_blank'>
                        <Icon icon={facebookFill} color="white" />
                        </a>{" "}
                      </span> */}

                    <span>
                      <a href='https://github.com/a1imansouri1' target='_blank'>
                        <Icon className='social_links_icon' icon={githubLine} color="white" />
                      </a>
                    </span>

                    {/* <span>
                      {" "}
                      <a href='https://www.youtube.com' target='_blank'>
                      <Icon icon={youtubeLine} color='white' />
                      </a>{" "}
                    </span> */}
                    <span>
                      <a href='https://www.linkedin.com/in/ali-mansouri-55633011b/' target='_blank'>
                        <Icon className='social_links_icon' icon={linkedinFill} color="white" />
                      </a>
                    </span>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>

        <Row className='mt-0'>
          <Col lg='12' md='12'>
            <p className='copyright_text'>Copyright © 2022, website made by Ali Mansouri. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;