import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import "./Styles.css"


const ActorsItem = ({actor}) => {
    const {name, profile_path} = actor
    return (
    <Card  className="actor-card">
    <Card.Img variant="top"src={`	https://www.themoviedb.org/t/p/w470_and_h470_face${profile_path}`} alt={name} />
    <Card.Body>
        <Card.Title className="card-title">Name: {name}</Card.Title>
    </Card.Body>
    </Card>
       
    );
};

ActorsItem.propTypes = {
    actor: PropTypes.shape({
      name: PropTypes.string,
      profile_path: PropTypes.number
      
    }).isRequired,
  }
  

export default ActorsItem;