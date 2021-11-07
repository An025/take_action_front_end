import axios from 'axios';
import React , {useContext} from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import  './SignInAndUp.scss';
import logo from "../images/leaf_logo.png";


const Login = props => {
    let history = useHistory();
    const context = useContext(AuthContext)

    const handleSignIn = (event) => {
        let username = event.target.parentNode.parentNode.children[0].children[0].value;
        let password = event.target.parentNode.parentNode.children[1].children[0].value;

        let body = {
            name: username,
            password: password
        }
        axios.post("api/v1/signin", body)
            .then(function (response) {
                context.onLogin(response.data.username,response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            });

        history.push("/");
    }

    const handleSignUp = (event) => {
        
        let username = event.target.parentNode.parentNode.children[0].children[0].value;
        let email = event.target.parentNode.parentNode.children[1].children[0].value;
        let password = event.target.parentNode.parentNode.children[2].children[0].value;

        let body = {
            'name': username,
            'email': email,
            'password': password
        };
        axios.post("api/v1/registration",body)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        history.push("/");
    }


    const showSignup = (event) => {
        let prism = event.target.parentNode.parentNode.parentNode.parentNode;
        prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
    }

    const showLogin = (event) => {
        let prism = event.target.parentNode.parentNode.parentNode.parentNode;
        prism.style.transform = "translateZ(-100px)";
    }

    const showForgotPassword = (event) => {
        let prism = event.target.parentNode.parentNode.parentNode.parentNode;
        prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
    }

    const showThankYou = (event) => {
        event.preventDefault();
        let prism = event.target.parentNode.parentNode.parentNode.parentNode;
        prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
    }

    
    return (
        <div className="bgImg">

            <div className="wrapper">
                <div className="rec-prism">
                    
                    <div className="face face-front">
                        <div className="content">
                            <div className="signin-title">
                                <img className="logo" src={ logo } alt="logo"/>
                                <h2>Sign in</h2>
                            </div>
                            
                            <form method="post">
                                <div className="field-wrapper">
                                    <input type="text" name="username" placeholder="username"></input>
                                    <label>username</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="password" autoComplete="new-password"></input>
                                    <label>password</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="submit" onClick={ handleSignIn }></input>
                                </div>
                                <span className="psw" onClick={ showForgotPassword }>Forgot Password?</span>
                                <span className="signup" onClick={ showSignup }>Not a user?  Sign up</span>
                            </form>
                        </div>
                    </div>

                    <div className="face face-back">
                        <div className="content">
                            <div className="signin-title">
                                <img className="logo" src={ logo } alt="logo"/>
                                <h2>Forgot your password?</h2>
                            </div>
                            <small>Then you won't see our awesome page but you can 
                                still type in your email</small>
                            <form onSubmit={ showThankYou } method="post">
                                <div className="field-wrapper">
                                    <input type="text" name="email" placeholder="email"></input>
                                    <label>e-mail</label>
                                </div>
                                {/* <div className="field-wrapper">
                                    <input type="submit"></input>
                                </div> */}
                                <span className="psw" onClick={ showLogin }>Try Again</span>
                            </form>
                        </div>
                    </div>

                    <div className="face face-right">
                        <div className="content">
                            <div className="signin-title">
                                <img className="logo" src={ logo } alt="logo"/>
                                <h2>Sign up</h2>
                            </div>
                            
                            <form method="post">
                                <div className="field-wrapper">
                                    <input type="text" name="username" placeholder="username"></input>
                                    <label>username</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="text" name="email" placeholder="email"></input>
                                    <label>email</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="password" autoComplete="new-password"></input>
                                    <label>password</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password2" placeholder="password" autoComplete="new-password"></input>
                                    <label>re-enter password</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="submit" onClick={ handleSignUp }></input>
                                </div>
                                <span className="singin" onClick={ showLogin }>Already a user?  Sign in</span>
                            </form>
                        </div>
                    </div>

                    <div className="face face-bottom">
                        <div className="content">
                            <div className="thank-you-msg">
                                Thank you!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Login;