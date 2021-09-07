import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// style
import './style.css';
import { Navbar, Container, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// state
import { useDispatch, useSelector } from 'react-redux';

// media file
import logo from '../../img/logo.png';

// Components
import Sidebar from './sidebar';

// store
import { setSearch } from '../../storage/reducer';

const NavBar = () => {
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  function handleSearchSubmit(event){
    event.preventDefault();
    dispatch(setSearch(keyword))
  }

  return (
    <>
      <Navbar bg="transparent" className='navbar-custom'>
        <Container fluid>
          <Col className='ms-4' lg={3} md={4} sm={5}>
            <Link to='/' className='me-3'>
              <Navbar.Brand className='brand me-0'><img src={logo} alt='logo' /></Navbar.Brand>
            </Link>
            <Link to="/movies" className="nav-links left link-comp">Movies</Link>
          </Col>
          <Col lg={7} md={6} sm={5} className='text-center'>
            <Form onSubmit={(event) => handleSearchSubmit(event)}>
              <Form.Control
                type="search"
                placeholder="Search"
                className='text-center nav-search-input'
                onChange={(event) => setKeyword(event.target.value)}
              /> 
            </Form>
          </Col>
          <Col className='text-end me-4' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Navbar.Text className='link-comp'>
              <Sidebar />
            </Navbar.Text>
            <Navbar.Text className='link-comp user-holder'>
              {
                user.photoURL
                ? <div id='user-icon' style={{backgroundImage: `url('${user.photoURL}')`}} />
                : <Link to='/sign' className='user-icon-anon'><FontAwesomeIcon icon={faUserCircle} size='lg' /></Link>
              }
            </Navbar.Text>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
