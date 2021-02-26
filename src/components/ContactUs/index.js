import React from 'react';
import './index.css';

function ContactUs() {
    return (
        <div style={{backgroundColor: "transparent"}}>
            <div className="contact">
                Contact Us
            </div>
            <div style={{width: "50%", margin: "auto"}}>
                <table className="table-responsive">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{width: "35%"}}>
                                GHUMO,
                                Ground Floor, Inder Prakash Building,
                                Barakhamba Road, Connaught Place,
                                New Delhi, Delhi 110001
                            </td>
                            <td>
                                Toll Free Number : 0119810337988
                            </td>
                            <td>
                                ghumo.travel2021@gmail.com
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container">
                <p id="querytitle">Hey! Have questions in mind? Ask anything we are listening...</p>
                <form id="query">
                    <fieldset>
                        <legend style={{color: "royalblue", fontFamily: "cursive"}}>Query Form</legend>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="name">Name : </label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="email">E-mail : </label>
                            </div>
                            <div className="col-md-6">
                                <input type="email" id="email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="phone">Phone Number : </label>
                            </div>
                            <div className="col-md-6">
                                <input type="tel" id="phone"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="person">Number of Travelers ? </label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" id="person" min="1"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="place">Where would you like to Travel ? </label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="place"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="amount">What is your Budget ? </label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="amount"/>
                            </div>
                        </div><br/>
                        <div className="row flex-column">
                            <div className="col-md-6">
                                <textarea id="details" placeholder="Write your query in this block..."/>
                            </div>
                            <div className="col-md-6">
                                <button type="button" id="submit">Submit Query</button>
                            </div>
                        </div>  
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
