import React from 'react';
 
function Album ({album}) {
    console.log(album);
    return (
        <div className="Album">
            <h1>{album.album_name}</h1>
            <div>{album.created_at}</div>
        </div>
    );
}

export default Album ;