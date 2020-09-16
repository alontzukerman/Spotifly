import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <Link style={{textDecoration: "none",color: "inherit"}}to="/">
                <ion-icon size="large" name="home-outline"></ion-icon>
            </Link>
        </div>
    )
}

export default Navbar
