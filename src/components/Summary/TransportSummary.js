import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ToggleButton } from 'react-bootstrap';
import TwoLevelPieChart from './TwoLevelPieChart';
import LineBarComposedChart from './LineBarComposedChart';
import './TransportSummaryStyle.scss';


const Summary = () => {
    // const [statEv, setStatEv] = useState();
    const [show, setShow] = useState(false);


/*     useEffect(()=>{
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
      }, []) */
      
    
    const handleDisplay = ()=>{
        setShow(!show);
    }


    return(
        <div className="travelsummary">
            <button className="travelButton" onClick={handleDisplay}>Produced CO2 via traveling</button>
            <div className={  show ? " transportchartscontainer displayed" : "transportchartscontainer" }>
                <TwoLevelPieChart />
                <LineBarComposedChart/>
            </div>
        </div>
    )
}

export default Summary;