import React, { useState} from 'react';
import { Link } from 'react-router-dom';

// style
import './style.css';
import { Navbar, Container, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// state
import { useSelector } from 'react-redux';
import useMoviesFetch from "../hooks/useMoviesFetch"

// Components
import Sidebar from './sidebar';

const NavBar = () => {
  const user = useSelector(state => state.user);
  const [search, setSearch] = useState("")



  const handleSearchChange = (e) =>{
    setSearch(e.target.value)
  };
 
  const {data: searchedMovie} = useMoviesFetch(`https://api.themoviedb.org/3/search/movie?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US&page=1&include_adult=false&query=${search}`)
  console.log("🚀 ~ file: index.jsx ~ line 26 ~ NavBar ~ searchedMovie", searchedMovie)
  return (
    <>
      <Navbar bg="transparent">
        <Container fluid>
          <Col className='ms-4'>
            <Link to='/' className='link-comp me-3'>
              <Navbar.Brand className='brand me-0'>Moviestan</Navbar.Brand>
            </Link>
            <Link to="/movies" className="nav-links left link-comp">Movies</Link>
          </Col>
          <Col lg={7} className='text-center'>
            <Form>
              <Form.Control type="search" placeholder="Search" className='text-center nav-search-input' onChange={handleSearchChange}/> 
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
                : <Link to='/sign'><FontAwesomeIcon icon={faUserCircle} size='lg' /></Link>
              }
            </Navbar.Text>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
