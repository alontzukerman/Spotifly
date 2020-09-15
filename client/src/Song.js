import React from 'react'

function Song({song}) {
    // console.log(song);
    return (
        <div className="ItemCon">
            {song.title}
        </div>
    )
}

export default Song
