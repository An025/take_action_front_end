
import axios from 'axios';
import React , {useContext} from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import Card from './elements/Card';
import  './SignInAndUp.scss'

const Login = props => {
    let history = useHistory();
    const context = useContext(AuthContext)

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
                context.onLogin(response.data.username,response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            });

        history.push("/");
    }

    
    return (
        <div className="bgImg">
            <div className="space"></div>
            <Card title={'Login'} createStyle={"card"}>
                {/* <form action="api/v1/signin" method="post" id="login" style={formStyle}>  */}
                <form action="api/v1/signin" method="post" id="login" className="input"> 

                    <label htmlFor="username">Enter your username: </label>
                    <input type="text" name="name" id="name" required></input>

                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" name="password" id="password" required></input>
                    <button className="buttonStyle" type="button" onClick={handleClick}>Submit</button>
                </form>
            </Card>
        </div>

        
    )
}

export default Login;