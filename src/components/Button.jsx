import React from 'react';
import './Button.css'
function Button({ handleCLick }) {
    return ( 
        <button className="btnPrimary" onClick={handleCLick}>
            Click here!
        </button>
     );
}

export default Button;