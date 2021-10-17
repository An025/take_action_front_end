import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = (props) => {

  const onTrigger = (data) => {
    console.log(data);
    props.parentCallback("Data from child");
    // event.preventDefault();
  }

  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => {
      console.log("asd");
      onTrigger(date);
      setStartDate(date)}} />
  );
};

export default Example