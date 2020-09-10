import React from 'react';
 
function Song ({song}) {
    console.log(song);
    return (
        <div className="Song">
            <h4 className="songTitle">{song.title}</h4>
            <iframe src={song.youtube_link}></iframe>
        </div>
    );
}

export default Song ;