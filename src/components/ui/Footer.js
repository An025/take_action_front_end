import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Date from '../util/Date';

import './Footer.scss';
import logo from "../images/leaf_logo.png"




export default function Footer() {


  return (
    <div className='footer'>
        <div className="copyright">
            <img className="logo" src={ logo } alt="logo"/>
            <div className="copyrightText">
                <Typography variant="p" className='team'>Team Enviroso,</Typography>
                <Typography variant="p"> All rights reserved - { <Date /> }</Typography>
            </div>
        </div>
    </div>
  );
}