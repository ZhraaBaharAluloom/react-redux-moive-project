import React from 'react';
import { Container, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';

// style
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

// media image
import logo from '../../img/logo.png';

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  console.log()
  return (
    <Container fluid className='container-fluid-footer'>
      <Container className='footer-wrapper'>
        <Col className="sitemap footer-col">
          <h3 className='header-footer'>Sitemap</h3>
          <div className='link-footer-outer'>
            <Link to="/actors" className='link-footer'>Actors</Link>
          </div>
          <div className='link-footer-outer'>
            <Link to="/about" className='link-footer'>About</Link>
          </div>
          <div className='link-footer-outer'>
            <Link to="/" className='link-footer'>Home</Link>
          </div>
          <div className='link-footer-outer'>
            <Link to="/movies" className='link-footer'>Movies</Link>
          </div>
        </Col>
        <div className='straight-line' />
        <Col className='footer-col logo'>
          <img src={logo} alt="logo" />
        </Col>
        <div className='straight-line' />
        <Col className="social-style footer-col">
          <h3 className='header-footer'>Contact Developers</h3>
          <div className='developer-footer'>
            <div>
              <h6>Elyas S. Ahmad</h6>
              <a href='https://github.com/ElyasSalar' target='_blank' rel="noreferrer" className='link-footer'>
                <FontAwesomeIcon icon={faGithub} size='lg' />
              </a>
              <a href='https://www.facebook.com/elyas.softDev' target='_blank' rel="noreferrer" className='link-footer'>
                <FontAwesomeIcon icon={faFacebook} size='lg' />
              </a>
              <a href='https://www.instagram.com/elyas.s.ahmad' target='_blank' rel="noreferrer" className='link-footer'>
                <FontAwesomeIcon icon={faInstagram} size='lg' />
              </a>
              <p>elyassalar8@gmail.com</p>
            </div>
            <div>
              <h6>Zahraa B.</h6>
              <a href='https://github.com/ElyasSalar' target='_blank' rel="noreferrer" className='link-footer'>
                <FontAwesomeIcon icon={faGithub} size='lg' />
              </a>
              <a href='https://www.facebook.com/elyas.softDev' target='_blank' rel="noreferrer" className='link-footer'>
                <FontAwesomeIcon icon={faFacebook} size='lg' />
              </a>
              <a href='https://www.instagram.com/elyas.s.ahmad' target='_blank' rel="noreferrer" className='link-footer'>
                <FontAwesomeIcon icon={faInstagram} size='lg' />
              </a>
              <p>elyassalar8@gmail.com</p>
            </div>
          </div>
        </Col>
      </Container>
    </Container>
    );
  };

export default Footer;