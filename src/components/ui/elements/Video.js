import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function Video(){
    return <div style={{width: '100%'}}>
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=kZIrIQDf1nQ"
        width= '100%'
        height='98%'

        />
    </div>
}