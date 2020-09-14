import React from 'react';
 
function Artist ({artist,onClick}) {
    console.log(artist);
    return (
        <div className="Artist" onClick={()=>onClick(artist.song_id,"song")}>
            {/* <img width="800" height="auto" src={artist.cover_img}></img> */}
            <span>{artist.title}</span>
            <span>{artist.length}</span>
            <span>{artist.created_at}</span>
        </div>
    );
}

export default Artist ;