import React from 'react'

function Album({album}) {
    console.log(album);
    return (
        <div className="ItemCon">
            {album.album_name}         
        </div>
    )
}

export default Album
