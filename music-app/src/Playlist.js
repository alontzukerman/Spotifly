import React from 'react';
 
function Playlist ({playlist,onClick}) {
    console.log(playlist);
    return (
        <div className="Playlist" onClick={()=>onClick(playlist.song_id,"song")}>
            <span>{playlist.title}</span>
            <span>{playlist.length}</span>
            <span>{playlist.created_at}</span>
            
        </div>
    );
}

export default Playlist ;