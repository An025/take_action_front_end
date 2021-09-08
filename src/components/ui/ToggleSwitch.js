import React from "react";
import "./ToggleSwitch.scss"

const ToggleSwitch = props => {


    return (       
        <div className="toggle-switch">
            <label htmlFor="fuel-toggle">Fuel type:</label>
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name="fuel-toggle"
                value = {props.fuel}
                id={props.fuel}
                // onChange={ setFuel_("hello") }
                />

            <label className="toggle-switch-label" htmlFor={props.fuel}>
                <span className="toggle-switch-inner" data-yes="diesel" data-no="gasoline" />
                <span className="toggle-switch-switch" />
            </label>
        </div>
      );

  }

export default ToggleSwitch;

