import React from 'react';
import { useHistory } from 'react-router-dom';


function Playlist({playlist}) {
    // console.log(playlist);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/playlist/${playlist.playlist_id}`)}}>
            {
                playlist.playlist_name
            }
        </div>
    )
}

export default Playlist
