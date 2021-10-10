
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Registration = props => {

    const [buttonType, setbuttonType] = useState(
        "button"
    )

    const confirmPassword = (event) => {
        let password1 = event.target.parentNode.children[5].value;
        let password2 = event.target.value;

        if (password1 === password2) {
            setbuttonType("submit");
            event.target.parentNode.children[8].style.display = "none";
        } else {
            setbuttonType("button");
            event.target.parentNode.children[8].style.display = "block";
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50vh',
        margin: 'auto',
        padding: '15px'
    };

    let hiddenConfirmation = {
        display: 'none',
        color: 'red'
    };

    let history = useHistory();

    const handleSubmit = (event) => {
        history.push("/");
    }

    return (
        <div>
            <form action="api/v1/registration" method="post" id="registration" style={formStyle} onSubmit={handleSubmit}>
                <label for="username">Enter your username: </label>
                <input type="text" name="name" id="name" required></input>

                <label for="email">Enter your email: </label>
                <input type="email" name="email" id="email" required></input>    

                <label for="password">Enter your password: </label>
                <input type="password" name="password" id="password" required></input>

                <label for="password_again">Enter your password again: </label>
                <input onChange={confirmPassword} type="password" name="password_again" id="password_again" required></input>
                <p style={hiddenConfirmation}>The passwords have to match!</p>

                <button type={buttonType}>Submit</button>
            </form>
        </div>
    )

}

export default Registration;