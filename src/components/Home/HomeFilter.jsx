import React from 'react';
import { Dropdown } from "react-bootstrap";

// import { Link } from 'react-router-dom';

const options= [
    {name: "Popularity"},
    {name: "Release date"},
    {name: "Top rated"},
    {name: "Now playing"}, 
    {name: "Upcoming"}
]

const HomeFilter = () =>  {
 
  const homeOptionList = options.map((option) => 
  <Dropdown.Item  key={option.name} href={option.name}>
      {/* <Link  to="/movies" > */}
        {option.name}
      {/* </Link> */}
    </Dropdown.Item>
  )
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Preference filter
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        {homeOptionList}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default HomeFilter;
