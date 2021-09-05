import React from 'react';
import classes from './NavBar.module.css';  
import {Link} from "react-router-dom";
import logo from "../images/logo.png"


export default function Navbar() {
    
    return(
        <div className={classes.navbar}>
            <img className="logo" id={classes["logo"]} src={ logo } alt="logo"/>
            <div className="menu-items">
                <Link to="/">Home</Link>
                <Link to="/carbon-footrpint">Footprint</Link>
            </div>
        </div>
    )
}