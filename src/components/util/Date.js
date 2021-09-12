import React, { useEffect, useState } from 'react';

const GetCurrentYear = props => {

    const [year, setYear] = useState(0);
    let myCurrentDate = new Date();

    useEffect(() => {
        setYear(myCurrentDate.getFullYear());
    }, [ year ])

    return (
        <span>
            { year }
        </span>
    )
}

export default GetCurrentYear;