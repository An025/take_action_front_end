import React from 'react';
import Date from '../util/Date';
import './Footer.scss';
import logo from "../images/leaf_logo.png";
import save from '../images/save.png';

export default function Footer() {

  return (
    <div className='footer'>
      <img className="save" src={ save } alt="save" ></img>
      <div className="copyright">
            <img className="logo" src={ logo } alt="logo"/>
            <div className="copyrightText">
                <p>Team TakeAction, All rights reserved - {<Date />}</p>
            </div>
      </div>
    </div>
  );
}