import React from 'react'

function Artist({artist}) {
    // console.log(artist);
    return (
        <div className="ItemCon">
            {artist.artist_name}        
        </div>
    )
}

export default Artist
