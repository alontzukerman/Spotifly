import React from 'react'

function Playlist({playlist}) {
    console.log(playlist);
    return (
        <div className="ItemCon">
            {playlist.playlist_name}
        </div>
    )
}

export default Playlist
