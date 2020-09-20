import React from 'react'
import { Link, useHistory } from 'react-router-dom';

function NotFound(props) {
    console.log(props);
    let history = useHistory();

    return (
        <div className="NotFound">
            <div style={{fontSize: 'xxx-large'}}>ERROR 404, Page Not Found</div>
            <Link to='/'>GO HOME</Link>
        </div>
    )
}

export default NotFound
