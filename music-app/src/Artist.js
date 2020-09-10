import React from 'react';
 
function Artist ({artist}) {
    console.log(artist);
    return (
        <div className="Artist">
            <span>{artist.artist_name}</span>
            <img className="artistImage" src={artist.cover_img}></img>
        </div>
    );
}

export default Artist ;