import React from 'react';
import Song from './Song';
import Artist from './Artist';
import Album from './Album';
import Playlist from './Playlist';
 
function Info ({infoOf,onClick}) {
    console.log(infoOf);
    return (
        <div className="Info">
            {infoOf[0] === "song" && infoOf[1].map((song,i)=> <Song key={i} song={song} />)}
            {infoOf[0] === "artist" && infoOf[1].map((artist,i)=> <Artist key={i} artist={artist} onClick={onClick}/>)}
            {infoOf[0] === "album" && infoOf[1].map((album,i)=> <Album key={i} album={album} onClick={onClick}/>)}
            {infoOf[0] === "playlist" && infoOf[1].map((playlist,i)=> <Playlist key={i} playlist={playlist} onClick={onClick}/>)}

        </div>
    );
}

export default Info ;