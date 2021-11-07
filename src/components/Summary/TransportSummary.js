import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TwoLevelPieChart from './TwoLevelPieChart';
import LineBarComposedChart from './LineBarComposedChart';
import './TransportSummaryStyle.scss';


const Summary = () => {
    const [statMonthlyTravels, setStatMonthlyTravels] = useState();
    const [show, setShow] = useState(false);


    useEffect(()=>{
        const axiosHeader = {
          headers: {
              'Content-type' : 'application/json',
              'Authorization' : "Bearer " + localStorage.getItem("token")
      
            }
        };
        axios.get("api/v1/transport/statistics", axiosHeader)
        .then(resp => {
          console.log(resp.data);
            setStatMonthlyTravels(resp.data)
        })
        .catch(err => {
            console.log(err);
        });
      }, [])
      
    
    const handleDisplay = ()=>{
        setShow(!show);
    }


    return(
        <div className="travelsummary">
            <button className="travelButton" onClick={handleDisplay}>Produced CO2 via traveling</button>
            <div className={  show ? " transportchartscontainer displayed" : "transportchartscontainer" }>
                <TwoLevelPieChart />
                <LineBarComposedChart data={ statMonthlyTravels }/>
            </div>
        </div>
    )
}

export default Summary;