import React from 'react';
 
function Album ({album,onClick}) {
    console.log(album);
    return (
        <div className="Album" onClick={()=>onClick(album.song_id,"song")}>
            <span>{album.title}</span>
            <span>{album.length}</span>
            <span>{album.created_at}</span>
        </div>
    );
}

export default Album ;