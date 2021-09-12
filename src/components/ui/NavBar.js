import './NavBar.scss';  
// import logo from "../images/logo.gif"
import logo from "../images/leaf_logo.png"
import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import DropDown from './elements/DropDown'
import {Link} from "react-router-dom";


export default function NavBar() {
  

  return (
    <div className="navbar" >
      
      <div className="leftContainer">
        <img className="logo" src={ logo } alt="logo"/>
        <Link to="/">
          <h4 className="title">Enviroso</h4>
        </Link>
        <Link to="/side">
          <h4 className="title"> Footprint</h4>
        </Link>
        <Link to="/side">
          <h4 className="title">About Us</h4>
        </Link>
      </div>
      <div className="rightContainer">
        <Link to="/login">
          <h4 className="title">Login</h4>
        </Link>
      </div>

      {/* <Typography variant="h6" className="title">Enviroso</Typography>
      <div className="menuItems">

      </div> */}
    </div>
  );
}
