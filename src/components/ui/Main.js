import React from 'react';
import classes from './Main.module.css';
import Button from './elements/Button';


function Main(){
    return(
        <div>
            <div className={classes.banner}>
            </div> 
            <div className={classes.container}>
                <h1 className={classes.title}> Some title come  here</h1>    
                <div className={classes.cardcontainer}>
                    <div className={classes.card}>
                        <h2>title</h2>
                    </div>
                    <div className={classes.card}>
                        <h2>title</h2>
                    </div>
                    <div className={classes.card}>
                        <h2>title</h2>
                    </div>
                </div>
                <Button link={"/side"} title="Next to Footprint" className={classes.button}/>

            </div>
            
            
        </div>
       
    )
}

export default Main;