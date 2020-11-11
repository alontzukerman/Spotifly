import React from 'react';
import { useHistory } from 'react-router-dom';

function Song({song}) {
    // console.log(song);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/song/${song.id}`)}}>
            <img src={song.Album.coverImg} alt="" style={{height: '150px', opacity: '0.6'}}></img>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'x-large',
                fontWeight: 'bolder'                
            }}>{song.songTitle}</div>
    </div>
    )
}

export default Song
