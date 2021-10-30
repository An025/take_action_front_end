import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import  './EVSummary.scss';
import { ToggleButton } from 'react-bootstrap';

const Summary = () => {
    const [statEv, setStatEv] = useState();
    const [showTable, setShowTable] = useState(false);
    useEffect(()=>{
        const axiosHeader = {
          headers: {
              'Content-type' : 'application/json',
              'Authorization' : "Bearer " + localStorage.getItem("token")
      
            }
        };
        axios.get("api/v1/ev/statistics", axiosHeader)
        .then(resp => {
            console.log(resp.data)
            setStatEv(resp.data)
        })
        .catch(err => {
            console.log(err);
        });
      }, [])
      
    
    const handleTable = ()=>{
        setShowTable(!showTable);
    }
    return(
        <>
        <div className="evsummary">

            <button className="evButton" onClick={handleTable}>Liked EV: {(statEv!==undefined)? statEv.length: 0}</button>
            <table className={!showTable? "evTable" : "showEvTable"}>
                <thead>
                    <tr>
                        <th>Town</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>Liked EV</th>
                    </tr>

                </thead>
                <tbody>
                {(statEv!==undefined)? statEv.map((ev) => (
                    <tr>
                        <td>{ev.town}</td>
                        <td>{ev.title}</td>
                        <td>{ev.address}</td>
                        <td className="red center">{ev.likedNumber}</td>

                    </tr>
           )): ""}  
                </tbody>
            </table>
           
           
        </div>
        </>
    )
}

export default Summary;