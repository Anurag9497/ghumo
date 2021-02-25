import React from 'react';
import './index.css';

function Login(props) {
    const handleSignIn = () => {
        props.setIsLogin({display: "none"})
    };

    return (
        <div id="login-div" style={props.isLogin}>
            <img id="cross" src="https://img.icons8.com/offices/50/000000/multiply.png" alt="X" onClick={handleSignIn}/>
            <form id="login-form">
                <label htmlFor="username">Username/Email ID</label><br/>
                <input type="text" id="username"/><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password"/><br/>
                <a href="#forgot" id="forgot">Forgot password ?</a><br/><br/>
                <button type="button" id="login-details" onClick={handleSignIn}>Sign in</button>
            </form>
        </div>
    );
}

export default Login;
