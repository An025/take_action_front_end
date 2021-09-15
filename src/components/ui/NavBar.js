import './NavBar.scss';  
// import logo from "../images/logo.gif"
import logo from "../images/leaf_logo.png"
import React from 'react';
// import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";



export default function NavBar() {

  return (
    <div className="main-container">

      <div className="navbar">
        <div className="leftContainer">
          <img className="logo" src={ logo } alt="logo"/>
          <Link to="/">
            <h4 className="title">TakeAction</h4>
          </Link>
          <Link to="/video">
            <h4 className="title"> Footprint</h4>
          </Link>
          <Link to="/about">
            <h4 className="title">About Us</h4>
          </Link>
        </div>
        <div className="rightContainer">
          <Link to="/login">
            <h4 className="title">Login</h4>
          </Link>
        </div>
      </div>

  {/*     <div className="dim-container">
      </div> */}

    </div>
  );
}
