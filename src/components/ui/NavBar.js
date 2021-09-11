import './NavBar.scss';  
// import logo from "../images/logo.gif"
import logo from "../images/leaf_logo.png"
import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import DropDown from './elements/DropDown'



export default function NavBar() {
  

  return (
    <div className="navbar" >
      <img className="logo" src={ logo } alt="logo"/>
      <Typography variant="h6" className="title">Enviroso</Typography>
      <div className="menuItems">
{/*         <DropDown />
        <DropDown /> */}
      </div>
    </div>
  );
}
