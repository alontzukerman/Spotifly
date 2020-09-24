import React from 'react';
import { Link } from 'react-router-dom';
import spotiflyIcon from './logo.png';

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/">
                <img src={spotiflyIcon} alt="" style={{height: '100%'}}></img>
            </Link>
            {/* <Link style={{textDecoration: "none",color: "inherit"}} to="/">
                <ion-icon size="large" name="home-outline"></ion-icon>
            </Link> */}
        </div>
    )
}

export default Navbar ;
