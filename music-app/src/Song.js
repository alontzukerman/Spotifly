import React from 'react';
 
function Song ({song}) {
    console.log(song);
    return (
        <div className="Song">
            <iframe width="560" height="315" src={song.youtube_link}></iframe>
            <h1>{song.title}</h1>
            <div>{song.length}</div>

        </div>
    );
}

export default Song ;