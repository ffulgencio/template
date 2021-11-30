import React from 'react';
import './Notification.css';

function Notification({ counter }) {
    return ( 
        <div className="badge">
            <span >
            { counter }
            </span> 
        </div>
     );
}

export default Notification;