import React from 'react';
import SideBar from './SideBar';
import Content from './Content';
import classes from './SidePage.module.css';


export default function SidePage(props){
    return (
        <div className={classes.container}>
            <SideBar/>
            <Content content={props.content}/>
        </div>
    )
}