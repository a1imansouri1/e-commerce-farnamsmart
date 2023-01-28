import { Container, Col, Row } from 'reactstrap';
import '../styles/not-found.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';

const NotFound = () => {
  return (
    <Helmet title='Not-Found'>
      <CommonSection />
      <Container>
        <Row>
          <Col lg='12' md='12'>
            <div className="not-found" >
              <h2>404</h2>
              <p>Page not found</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default NotFound;
