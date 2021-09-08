import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import Btn from '@material-ui/core/Button';
import {Link} from "react-router-dom";
// import classes from './Button.module.css';

export default function Button(props){


const useStyles= makeStyles({
    root:{
      background: 'linear-gradient(45deg, #99DA8B, #4F71C0)',
      border: 0,
      marginTop: 50,
      marginBottom: 15,
      borderRadius: 15,
      color: 'white',
      padding: '10px 30px',
      textAlign: 'center',
    }
  
  })
    
    const classes= useStyles();

  return (
    <Btn className={classes.root} >
      <Link to={props.link}>{props.title}</Link>
    </Btn>
  )
}