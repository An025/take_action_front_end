import React from 'react';
import upload from "../images/upload.jpg"




export default function Upload(){
    const imgStyle = {
        height: '90%',
    };
    return(
        <div>
            
            <img style={imgStyle} src={ upload } alt="upload"/>
        </div>
        
    )
}

