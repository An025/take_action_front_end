import './NavBar.scss';  
import logo from "../images/leaf_logo.png"
import React, {useState, useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import { ToggleSidebar } from './ToggleSidebar';
import './SideContent.css';
import {IconContext} from 'react-icons';
import {TiMediaPlay} from 'react-icons/ti';
import {TiMediaPlayReverse} from 'react-icons/ti';
import AuthContext from '../../context/AuthContext';
import PaginationContext from '../../context/PaginationContext';


export default function NavBar() {
  const [sidebar, setSidebar] = useState(false)
  const [navClassName, setnavClassName ]= useState("navbar active")
  const context = useContext(AuthContext)
  const contextVisibility = useContext(PaginationContext)


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [navClassName])


  let handleScroll=()=>{
    if (!contextVisibility.isNavbarBGVisible) {
      if (window.pageYOffset > 50) {
        if(navClassName !== "navbar active"){
          setnavClassName("navbar active" );   
        }
      }else{
        if(navClassName !== "navbar"){
          setnavClassName("navbar" );
        }
      }
    }
    
  }

  const showSidebar = () => setSidebar(!sidebar)
   return (
    <IconContext.Provider value={{color:'#6094be'}}>

    <div className="main-container">

      <div className={ navClassName }>
        <div className="leftContainer">
        <div className={sidebar ? 'nav-bar active': 'nav-bar'}>
        {context.isLoggedIn === true ?  
            <Link to="#" className={sidebar ? 'menu-bars': 'menu-bars active'}>
                {sidebar? <TiMediaPlayReverse onClick={showSidebar}/> : <TiMediaPlay onClick={showSidebar}/> }
            </Link>
           : <></>} 
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
              <h4 className="title"> Video</h4>
            </Link>
            <Link to="/about">
              <h4 className="title">About Us</h4>
            </Link>
            {context.isLoggedIn === true ? <Link to="/statistics"><h4 className="title">Statistics</h4></Link> : <></>}
          </div>
        </div>
        <div className="rightContainer">
          {context.isLoggedIn === false ? <Link to="/login"><h4 className="title">Login</h4></Link> : 
          <Link to="/" ><h4 className="title" onClick={context.onLogout}>Logout</h4></Link>
          /* {context.isLoggedIn === false ? <Link to="/registration"><h4 className="title">Registration</h4></Link> : <></>} */}
        </div>
      </div>

    </div>
    </IconContext.Provider>
  );
}
