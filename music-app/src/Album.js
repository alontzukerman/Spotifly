import React from 'react';
 
function Album ({album}) {
    console.log(album);
    return (
        <div className="Album">
            <span>{album.album_name}</span>
            <span>{album.created_at}</span>
            <span>{album.upload_at}</span>
        </div>
    );
}

export default Album ;