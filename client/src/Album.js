import React from 'react';
import { useHistory } from 'react-router-dom'


function Album({album}) {
    // console.log(album);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/album/${album.id}`)}}>
            <img src={album.coverImg} alt="" style={{height: '150px', opacity: '0.6'}}></img>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'x-large',
                fontWeight: 'bolder'                
            }}>{album.albumName}</div>
        </div>
    )
}

export default Album
