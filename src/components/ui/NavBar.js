// import React from 'react';
import style from './NavBar.module.css';  
// import {Link} from "react-router-dom";
// import logo from "../images/logo.gif"
import logo from "../images/leaf_logo.png"


// export default function Navbar() {
    
//     return(
//         <div className={classes.navbar}>
//             <div className="menu-items">
//                 <Link to="/">Home</Link>
//                 <Link to="/carbon-footrpint">Footprint</Link>
//             </div>
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  }

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed"  >
        <Toolbar className={style.nav}>
            <img className="logo" id={style["logo"]} src={ logo } alt="logo"/>
            <Typography variant="h6" className={classes.title}>
                Enviroso
            </Typography>
            <Button className={style.login} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
