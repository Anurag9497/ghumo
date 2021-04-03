import React from 'react';
import './index.css';

function Account(props) {
    const handleAccount = () => {
        props.setIsSignUp({display: "none"});
    };
    
    return (
        <div style={props.isSignUp} className="create-account-container">
            <div className="create-account d-flex flex-column">
                <div className="row pb-4">
                    <div className="col-md-12">
                        <img id="account-cross" src="https://img.icons8.com/offices/35/000000/multiply.png" alt="X" onClick={handleAccount}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="account-first-name">First Name</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" id="account-first-name"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="account-last-name">Last Name</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" id="account-last-name"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="dob">D.O.B</label>
                    </div>
                    <div className="col-md-6">
                        <input type="date" id="dob"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="account-phone">Phone</label>
                    </div>
                    <div className="col-md-6">
                        <input type="tel" id="account-phone"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="gender">Gender</label>
                    </div>
                    <div className="col-md-6">
                        <select id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="account-address">Address</label>
                    </div>
                    <div className="col-md-6">
                        <input type="text" id="account-address"/>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="account-email">Email</label>
                    </div>
                    <div className="col-md-6">
                        <input type="email" id="account-email"/>
                    </div>
                </div>
                <div className="row pb-2">
                    <div className="col-md-6">
                        <label htmlFor="account-password">Password</label>
                    </div>
                    <div className="col-md-6">
                        <input type="password" id="account-password"/>
                    </div>
                </div>
                <div className="row pb-2">
                    <div className="col-md-12">
                        <input type="checkbox" id="agree" value="correct-info"/>{" "}
                        <label htmlFor="agree">I hereby declare that the information provided is true and correct.</label>
                    </div>
                </div>
                <div className="row pb-2">
                    <div className="col-md-12">
                        <button type="button" id="account-submit" onClick={handleAccount}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
