import React from 'react';
 
function Artist ({artist}) {
    console.log(artist);
    return (
        <div className="Artist">
            <img width="800" height="auto" src={artist.cover_img}></img>
            <h1>{artist.artist_name}</h1>
        </div>
    );
}

export default Artist ;