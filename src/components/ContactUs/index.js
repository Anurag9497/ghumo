import React from 'react';
import './index.css';

function ContactUs() {
    return (
        <div style={{backgroundColor: "transparent"}}>
            <div className="contact">
                Contact Us
            </div>
            <div style={{width: "50%", margin: "auto"}}>
                <table>
                    <tr>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
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
                </table>
            </div>
            <div>
                <p id="querytitle">Hey! Have questions in mind? Ask anything we are listening...</p>
                <form id="query">
                    <fieldset>
                        <legend style={{color: "royalblue", fontFamily: "cursive"}}>Query Form</legend>
                        <label htmlFor="name">Name : </label>
                        <input type="text" id="name"/><br/>
                        <label htmlFor="email">E-mail : </label>
                        <input type="email" id="email"/><br/>
                        <label htmlFor="phone">Phone Number : </label>
                        <input type="tel" id="phone"/><br/>
                        <label htmlFor="person">Number of Travelers ? </label>
                        <input type="number" id="person" min="1"/><br/>
                        <label htmlFor="place">Where would you like to Travel ? </label>
                        <input type="text" id="place"/><br/>
                        <label htmlFor="amount">What is your Budget ? </label>
                        <input type="text" id="amount"/><br/><br/>
                        <textarea id="details" placeholder="Write your query in this block..."/><br/>
                        <button type="button" id="submit">Submit Query</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
