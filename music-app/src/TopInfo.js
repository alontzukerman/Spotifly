import React from 'react';
import Song from './Song';
import Artist from './Artist';
import Album from './Album';
import Playlist from './Playlist';
 
function TopInfo ({topOf}) {
    console.log(topOf);
    return (
        <div className="TopInfo">
            {topOf[0] === "top_songs" && topOf[1].map((song,i)=> <Song key={i} song={song}/>)}
            {topOf[0] === "top_artists" && topOf[1].map((artist,i)=> <Artist key={i} artist={artist}/>)}
            {topOf[0] === "top_albums" && topOf[1].map((album,i)=> <Album key={i} album={album}/>)}
            {topOf[0] === "top_playlist" && topOf[1].map((playlist,i)=> <Playlist key={i} playlist={playlist}/>)}
        </div>
    );
}

export default TopInfo ;