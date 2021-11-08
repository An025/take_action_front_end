import React from 'react';
import upload from "../images/upload.jpg"




export default function Upload(){
    const imgStyle = {
        height: '90%',
    };

    const uploadContainer ={
        height: '50vh',
    }
    return(
        <div style={uploadContainer}>
            
            <img style={imgStyle} src={ upload } alt="upload"/>
        </div>
        
    )
}

