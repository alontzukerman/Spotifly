import React from 'react';
import { useHistory } from 'react-router-dom';

function Song({song}) {
    console.log(song);
    let history = useHistory();
    return (
        <div 
        className="ItemCon"
        onClick={() => {history.push(`/song/${song.song_id}`)}}>
        <img src={song.cover_img} style={{height: '100%', opacity: '0.6'}}></img>
        <div style={{
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'x-large',
            fontWeight: 'bolder'                
        }}>{song.title}</div>
    </div>
            // <div 
            //     className="ItemCon"
            //     onClick={() => {history.push(`/song/${song.song_id}`)}}>
            //     {
            //         song.title
            //     }
            // </div>
    )
}

export default Song
