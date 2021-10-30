import React, { useEffect, useState } from 'react';

const GetCurrentYear = props => {

    const [year, setYear] = useState(0); 

    useEffect(() => {
        let myCurrentDate = new Date();
        setYear(myCurrentDate.getFullYear());
    }, [ year ])

    return (
        <span>
            { year }
        </span>
    )
}

export default GetCurrentYear;