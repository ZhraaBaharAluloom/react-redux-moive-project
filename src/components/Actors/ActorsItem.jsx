import React from 'react';
import PropTypes from 'prop-types';
// import "./Styles.css"
import { Link } from 'react-router-dom';


const ActorsItem = ({actor}) => {
    const {name, profile_path, id} = actor
    return (
      <>
       <Link to={`/actors/${id}`}> Name: {name} </Link>
       <img src={`https://www.themoviedb.org/t/p/w470_and_h470_face${profile_path}`} alt={name} />
      </>
    );
};

ActorsItem.propTypes = {
    actor: PropTypes.shape({
      name: PropTypes.string,
      profile_path: PropTypes.string,
      id: PropTypes.number
      
    }).isRequired,
  }
  

export default ActorsItem;