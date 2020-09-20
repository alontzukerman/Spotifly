import React from 'react';
import { useHistory } from 'react-router-dom'


function Album({album}) {
    // console.log(album);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/album/${album.album_id}`)}}>
            <img src={album.cover_img} style={{height: '100%', opacity: '0.6'}}></img>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'x-large',
                fontWeight: 'bolder'                
            }}>{album.album_name}</div>
        </div>
    )
}

export default Album
