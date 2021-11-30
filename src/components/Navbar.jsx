import React, {useState} from 'react';
import './Navbar.css';
import Button from './Button';
import Notification from './Notification';


function Navbar() {
    const [counter, setCounter] = useState(0);

    const handleCLick = ()=>{
        setCounter(prev => prev + 1 );
    }
    const title= "Hello World!";
    return ( 
        <div>
            <nav className="nav">
                <div className="navbarHeader" >
                    <div className="navbarBrand">
                        <img src="https://i2.wp.com/borrowbits.com/wp-content/uploads/2020/04/Docker_image.jpeg" alt="logo" className="logo"/>
                        <h1 className="title" >{ title }</h1>

                    </div>
                    <div>
                    <Button handleCLick={handleCLick} />
                    <div style={{position:'relative', left:-15, top: -20, width:'40px'}}>
                        <Notification counter={counter} />

                    </div>

                    </div>
                </div>
            </nav>
        </div>
     );
}

export default Navbar;