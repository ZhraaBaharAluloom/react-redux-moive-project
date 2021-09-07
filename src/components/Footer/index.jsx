import React from 'react';
import {Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./styles.css"




const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
 return (
    <div className="footer-wrapper ">
      <div className="info-style ">
        <div>
          <Link to="/actors">Actors</Link>
        </div>
          <Link to="/about">About</Link>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div>
        <div>
          <Button
            onClick={scrollToTop}
          >
            To Top
          </Button>
        </div>
      </div>

      <div className="social-style">
       <p>Founders: </p>
       <p>Zahraa B</p>
       <p>Elyas S</p>
      </div>
    </div>
    );
};

export default Footer;