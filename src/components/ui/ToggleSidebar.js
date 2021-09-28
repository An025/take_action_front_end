import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//icons
import EvStationIcon from '@material-ui/icons/EvStation';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FlightIcon from '@material-ui/icons/Flight';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

export const ToggleSidebar =[
    {
        title: 'Home',
        path: '/',
        icon : <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Food',
        path: '/food',
        icon : <FastfoodIcon />,
        cName: 'nav-text'
    },
    {
        title: 'EV Station',
        path: '/ev',
        icon : <EvStationIcon/>,
        cName: 'nav-text'
    },

    {
        title: 'Vehicle',
        path: '/vehicle',
        icon : <FlightIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Flight',
        path: '/flight',
        icon : <CardTravelIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Video',
        path: '/video',
        icon : <VideoLibraryIcon />,
        cName: 'nav-text'
    },
]
