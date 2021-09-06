import React from 'react';
import { Dropdown } from "react-bootstrap";
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

const options= [
    {name: "popular"},
    {name: "top_rated"},
    {name: "now_playing"}, 
    {name: "upcoming"}
]

const HomeFilter = ({option, handleOptionsClick}) =>  {
 
  const homeOptionList = options.map((_option) => 
  <Dropdown.Item  key={_option.name} onClick={() => handleOptionsClick(_option.name)}>
        {_option.name}
    </Dropdown.Item>
  )
  
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {option}
    </Dropdown.Toggle>
  
    <Dropdown.Menu>
    {homeOptionList}
    </Dropdown.Menu>
  </Dropdown>
  );
}
HomeFilter.propTypes = {
  option: PropTypes.string.isRequired,
  handleOptionsClick: PropTypes.func.isRequired,
}

export default HomeFilter;
