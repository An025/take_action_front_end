import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = (props) => {

  const onTrigger = (data) => {
    props.parentCallback(data);
  }

  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate} onChange={(date) => {
      setStartDate(date);
      onTrigger(date);
    }} />
  );
};

export default Example