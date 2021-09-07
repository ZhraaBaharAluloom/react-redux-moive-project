import React from 'react';

// style
import { Container, Col, Row, Pagination } from 'react-bootstrap';

import { Link } from 'react-router-dom';

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { scrollToTop } from '../Footer';
import useMoviesFetch from '../hooks/useMoviesFetch';

// APIs
import { discoveries, imageApi } from '../hooks/APIs';

// store
import { setPage } from '../../storage/reducer';

const MovieList = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(state => state.moviesFilter.page);
  const {data: discover, isLoaded} = useMoviesFetch(discoveries());

  function handlePageSetting(num){
    dispatch(setPage(num));
    scrollToTop();
  }

  function setPagination(){
    let arr = [];
    for(let j = 2; j > 0 ;j -= 1){
      arr.push(pageNumber - j);
    }
    for(let j = 0; j < 3 ;j += 1){
      arr.push(pageNumber + j);
    }
    const foundSmallestAt = arr.indexOf(0);
    if(foundSmallestAt !== -1) {
      arr = arr.map(value => foundSmallestAt + 1 + value);
    }
    const foundBiggestAt = arr.indexOf(500);
    if(foundBiggestAt !== -1) {
      arr = arr.map(value =>  - foundBiggestAt + value);
    }

    return (
      <Pagination style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}} size='lg'>
        { pageNumber !== 1 && <Pagination.Item onClick={() => handlePageSetting(1)}>{1}</Pagination.Item> }
        { pageNumber > 3 && <Pagination.Ellipsis /> }
        {
          arr.map(num => {
            if(pageNumber === num) return <Pagination.Item active onClick={() => handlePageSetting(num)}>{num}</Pagination.Item>
            return <Pagination.Item onClick={() => handlePageSetting(num)}>{num}</Pagination.Item>
          })
        }
        { pageNumber + 5 < discover.total_pages && <Pagination.Ellipsis /> }
        { pageNumber !== discover.total_pages && <Pagination.Item onClick={() => handlePageSetting(discover.total_pages)}>{discover.total_pages}</Pagination.Item> }
      </Pagination>
    )
  }

  if(!isLoaded) return <p>Loading ...</p>
  return(
    <Container className='container-movies'>
      <h1 style={{color: 'white'}}>Movies Page</h1>
      <Row>
        <Col lg={3}>
          efnipweri
        </Col>
        <Col>
          <div className='grid-cards'>
            {
              discover.results.map(movie => {
                const movieName = movie.original_title || movie.original_name;
                return (
                  <Link to={`/movie/${movie.id}`} className='card grid-card' title={movieName} vote={movie.vote_average}>
                    <img src={imageApi(movie.poster_path, 'normal')} alt='poster' />
                  </Link>
                )
              })
            }
          </div>
          {setPagination()}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieList;