import React from "react";
import "./ToggleSwitch.scss"

const ToggleSwitch = ({ id, name, checked, onChange, optionLabels}) => {

    return (

      console.log(optionLabels),
        console.log(checked),
      <div className="toggle-switch">
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          onChange={e => onChange(e.target.checked ? optionLabels[0] : optionLabels[1])}
          />

          {id ? (
            <label className="toggle-switch-label" htmlFor={id}>
              <span className="toggle-switch-inner" data-yes={optionLabels[0]} data-no={optionLabels[1]}/>
              <span className="toggle-switch-switch" />
            </label>
          ) : null}
        </div>
      );
  }

export default ToggleSwitch;