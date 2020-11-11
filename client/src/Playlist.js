import React from 'react';
import { useHistory } from 'react-router-dom';


function Playlist({playlist}) {
    // console.log(playlist);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/playlist/${playlist.id}`)}}>
            <img src={playlist.coverImg} alt="" style={{height: '150px', opacity: '0.6'}}></img>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'x-large',
                fontWeight: 'bolder'                
            }}>{playlist.playlistName}</div>
        </div>
    )
}

export default Playlist
