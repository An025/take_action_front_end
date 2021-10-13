
import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import Card from './elements/Card';
import  './SignInAndUp.scss'

const Login = props => {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50vh',
        margin: 'auto',
        padding: '15px'
    };


    let history = useHistory();

    const handleClick = (event) => {
        
        let username = event.target.parentNode.children[1].value;
        let password = event.target.parentNode.children[3].value;

        let body = {
            name: username,
            password: password
        }

        axios.post("api/v1/signin", body)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("token", response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });

        history.push("/");
    }
    
    return (
        <div className="bgImg">
            <div className="space"></div>
            <Card title={'Login'} style={"card"}>
                {/* <form action="api/v1/signin" method="post" id="login" style={formStyle}>  */}
                <form action="api/v1/signin" method="post" id="login" className="input"> 

                    <label for="username">Enter your username: </label>
                    <input type="text" name="name" id="name" required></input>

                    <label for="password">Enter your password: </label>
                    <input type="password" name="password" id="password" required></input>
                    <button type="button" onClick={handleClick}>Submit</button>
                </form>
            </Card>
        </div>

        
    )
}

export default Login;