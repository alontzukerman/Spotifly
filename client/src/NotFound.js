import React , { useEffect } from 'react'
import { Link , useHistory } from 'react-router-dom';
import AnalyticsManager from './AnalyticsManager';


function NotFound(props) {
    console.log(props);
    let history = useHistory();

    useEffect(() => {
        AnalyticsManager("Not Found Page");
      },[]);

    return (
        <div className="NotFound">
            <div style={{fontSize: 'xxx-large'}}>ERROR 404, Page Not Found</div>
            <Link to='/'>GO HOME</Link>
        </div>
    )
}

export default NotFound
