import React from 'react';
import classes from './Main.module.css';
import Button from './elements/Button';


function Main(){
    return(
        <div>
            <div className={classes.banner}>
            </div> 
            <div className={classes.container}>
                <p>Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.</p>
            </div>
            <Button link={"/side"} title="Next to Footprint"/>
        </div>
       
    )
}

export default Main;