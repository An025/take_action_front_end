
import React from 'react';
import { Redirect } from "react-router-dom";

const Logout = props => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    return (
        <div>
            <Redirect to='/'/>;
        </div>
    )

}

export default Logout;