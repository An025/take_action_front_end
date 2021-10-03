import './NavBar.scss';  
// import logo from "../images/logo.gif"
import logo from "../images/leaf_logo.png"
import React, {useState} from 'react';
// import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { ToggleSidebar } from './ToggleSidebar';
import './SideContent.css';
import {IconContext} from 'react-icons';
import {TiArrowRightOutline} from 'react-icons/ti';
import {TiArrowLeftOutline} from 'react-icons/ti';


export default function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
   return (
    <IconContext.Provider value={{color:'#6094be'}}>

    <div className="main-container">

      <div className="navbar">
        <div className="leftContainer">
        <div className={sidebar ? 'nav-bar active': 'nav-bar'}>
            
            <Link to="#" className={sidebar ? 'menu-bars': 'menu-bars active'}>
                {sidebar? <TiArrowLeftOutline onClick={showSidebar}/> : <TiArrowRightOutline onClick={showSidebar}/> }
            </Link>
            
        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>

                </li>
                {ToggleSidebar.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
          <div className={sidebar ? 'nav-header active': 'nav-header'}>         
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
        </div>
        <div className="rightContainer">
          <Link to="/login">
            <h4 className="title">Login</h4>
          </Link>
        </div>
      </div>

    </div>
    </IconContext.Provider>
  );
}
