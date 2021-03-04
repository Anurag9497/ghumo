import React,{useState} from 'react';
import './index.css';

function Stays() {
    const [checkin, setCheckin] = useState("text");
    const [checkout, setCheckout] = useState("text");
    return (
        <div className="d-flex flex-column container stays">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <input type="text" id="stays-place" placeholder="Where are you going ?"/>
                </div>
                <div className="col-md-3">
                    <input 
                    type={checkin} 
                    id="stays-checkin" 
                    placeholder="Check-in" 
                    onMouseOver={() => setCheckin("date")} 
                    onMouseOut={() => setCheckin("text")} 
                    onFocus={() => setCheckin("date")} 
                    onBlur={() => setCheckin("text")}
                    />
                </div>
                <div className="col-md-3">
                    <input 
                    type={checkout} 
                    id="stays-checkout" 
                    placeholder="Check-out" 
                    onMouseOver={() => setCheckout("date")} 
                    onMouseOut={() => setCheckout("text")} 
                    onFocus={() => setCheckout("date")} 
                    onBlur={() => setCheckout("text")}
                    />
                </div>
                <div className="col-md-3">
                    <input type="number"  id="stays-rooms" placeholder="Rooms"/>
                </div>
            </div>
            <div className="row justify-content-center btn-lg">
                <button type="button" id="stays-submit">Search</button>
            </div>
        </div>
    );
}

export default Stays;
