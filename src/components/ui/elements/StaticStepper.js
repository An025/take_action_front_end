import React from 'react';
import "./StaticStepper.scss";


const StaticStepper = props => {

    return (
        <div className="st-stepper-container">
            <ul className="progressbar">
                <li>{ props.state1 }</li>
                <li>{ props.state2 }</li>
                <li>{ props.state3 }</li>
            </ul>
        </div>
    )
}

export default StaticStepper;
