import React,{useState} from 'react';
import './index.css';

function Flights() {
    const [depart, setDepart] = useState("text");
    return (
        <div className="d-flex flex-column container flights">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <input type="text" id="flights-from" placeholder="From"/>
                </div>
                <div className="col-md-4">
                    <input type="text" id="flights-to" placeholder="To"/>
                </div>
                <div className="col-md-4">
                    <input 
                    type={depart} 
                    id="flights-depart" 
                    placeholder="Depart"
                    onMouseOver={() => setDepart("date")}
                    onMouseOut={() => setDepart("text")}
                    onFocus={() => setDepart("date")}
                    onBlur={() => setDepart("text")}
                    />
                </div>
            </div>
            <div className="row justify-content-center btn-lg">
                <button type="button" id="flights-submit">Search</button>
            </div>
        </div>
    );
}

export default Flights;
