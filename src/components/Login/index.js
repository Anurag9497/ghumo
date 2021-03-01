import React from 'react';
import './index.css';

function Login(props) {
    const handleSignIn = () => {
        props.setIsLogin({display: "none"})
    };

    return (
        <div id="login-div" style={props.isLogin} className="container justify-content-center">
            <form id="login-form">
                <div className="row pb-4">
                    <div className="col-md-12">
                        <img id="cross" src="https://img.icons8.com/offices/30/000000/multiply.png" alt="X" onClick={handleSignIn}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="username">Username</label><br/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" id="username"/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="password">Password</label><br/>
                    </div>
                    <div className="col-md-6">
                        <input type="password" id="password"/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <a href="#forgot" id="forgot">Forgot password ?</a><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button type="button" id="login-details" onClick={handleSignIn}>Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
