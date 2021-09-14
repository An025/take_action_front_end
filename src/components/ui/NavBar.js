import './NavBar.scss';  
// import logo from "../images/logo.gif"
import logo from "../images/leaf_logo.png"
import React from 'react';
// import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const DimContainer = styled.div`
  display: none;
  position:fixed;
  left:0;
  top:10vh;
  z-index: 5;
  height: 100%;
  width: 100%;
  background: rgb(0,0,0,0.6);
  &:hover {function(e) {
    display: block;
  }}
`;


export default function NavBar() {

  return (
    <div className="main-container">

      <div className="navbar">
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
      </div>

      <div className="dim-container">
      </div>

    </div>
  );
}
