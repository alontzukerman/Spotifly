import React , { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import spotiflyIcon from './logo.png';
import StyledSearch from './styled/StyledSearch';
import AnalyticsManager from './AnalyticsManager';


function Navbar() {
    let history = useHistory();

    const [isLogged , setIsLogged] = useState();

    let name = localStorage.getItem('fullName') ? 
    localStorage.getItem('fullName') :
    null ;

    useEffect(()=>{
        setIsLogged(localStorage.getItem('token') ? true : false);
    },[]);

    function logOut() {
        localStorage.removeItem('token');
        history.push("/login");
        setIsLogged(localStorage.getItem('token') ? true : false);
    }

    function sendEvent(tagName) {
        AnalyticsManager("Navbar Tag Clicked" , {"tag": tagName});
    }
    return (
        <div className="Navbar">
            {/* <StyledSearch /> */}
            <Link to="/" className="NavTag" onClick={()=>sendEvent("Home")}>
                Home
            </Link>
            <Link to='/search' className="NavTag" onClick={()=>sendEvent("Search")}>
                Search
            </Link>
            <Link to="/" onClick={()=>sendEvent("Icon")}>
                <img src={spotiflyIcon} alt="" style={{height: '10vh'}}></img>
            </Link>
            <Link to="/login" className={isLogged ? "HiddenTag" : "NavTag"}>
                Login
            </Link>
            <Link to="/register" className={isLogged ? "HiddenTag" : "NavTag"}>
                Register
            </Link>
            <div className={!isLogged && "HiddenTag"}
                style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'black'
                }}>{name && name}</div>
            <div className={isLogged ? "NavTag" : "HiddenTag"} onClick={()=>logOut()}>Log Out</div>
        </div>
    )
}

export default Navbar ;
