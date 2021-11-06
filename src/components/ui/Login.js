import axios from 'axios';
import React , {useContext} from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import Card from './elements/Card';
import  './SignInAndUp.scss';
import logo from "../images/leaf_logo.png";


const Login = props => {
    let history = useHistory();
    const context = useContext(AuthContext)

    const handleSignIn = (event) => {
/*         let username = event.target.parentNode.children[1].value;
        let password = event.target.parentNode.children[3].value; */
        let username = event.target.parentNode.parentNode.children[0].children[0].value;
        let password = event.target.parentNode.parentNode.children[1].children[0].value;

        let body = {
            name: username,
            password: password
        }
        console.log(body);
        axios.post("api/v1/signin", body)
            .then(function (response) {
                context.onLogin(response.data.username,response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            });

        history.push("/");
    }

    let prism = document.querySelector(".rec-prism");

    const showSignup = (event) => {
        prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
    }

    const showLogin = (event) => {
        prism.style.transform = "translateZ(-100px)";
    }

    const showForgotPassword = (event) => {
        prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
    }

    const showThankYou = (event) => {
        event.preventDefault();
        prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
    }

    
    return (
        <div className="bgImg">
{/*             <div className="space"></div>
            <Card title={'Login'} createStyle={"card"}>
                <form action="api/v1/signin" method="post" id="login" className="input"> 

                    <label htmlFor="username">Enter your username: </label>
                    <input type="text" name="name" id="name" required></input>

                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" name="password" id="password" required></input>
                    <button className="buttonStyle" type="button" onClick={handleClick}>Submit</button>
                </form>
            </Card>
 */}

            <div className="wrapper">
                <div className="rec-prism">
                    
                    <div className="face face-front">
                        <div className="content">
                            <div className="signin-title">
                                <img className="logo" src={ logo } alt="logo"/>
                                <h2>Sign in</h2>
                            </div>
                            
                            <form>
                                <div className="field-wrapper">
                                    <input type="text" name="username" placeholder="username"></input>
                                    <label>username</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="password" autocomplete="new-password"></input>
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
                            <small>Enter your email so we can send you a reset link for your password</small>
                            <form onSubmit={ showThankYou }>
                                <div className="field-wrapper">
                                    <input type="text" name="email" placeholder="email"></input>
                                    <label>e-mail</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="submit"></input>
                                </div>
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
                            
                            <form onSubmit={ showThankYou }>
                            <div className="field-wrapper">
                                <input type="text" name="email" placeholder="email"></input>
                                <label>e-mail</label>
                            </div>
                            <div className="field-wrapper">
                                <input type="password" name="password" placeholder="password" autocomplete="new-password"></input>
                                <label>password</label>
                            </div>
                            <div className="field-wrapper">
                                <input type="password" name="password2" placeholder="password" autocomplete="new-password"></input>
                                <label>re-enter password</label>
                            </div>
                            <div className="field-wrapper">
                                <input type="submit"></input>
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