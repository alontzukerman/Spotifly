import React from 'react';
import { useHistory } from 'react-router-dom'


function Album({album}) {
    // console.log(album);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/album/${album.album_id}`)}}>
            {
                album.album_name
            }         
        </div>
    )
}

export default Album
