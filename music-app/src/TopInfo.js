import React from 'react';
import Song from './Song';
import Artist from './Artist';
import Album from './Album';
import Playlist from './Playlist';
 
function TopInfo ({topOf,onClick}) {
    console.log(topOf);
    return (
        <div className="TopInfo">
            {topOf[0] === "top_songs" && topOf[1].map((song,i)=> <div className="song" onClick={()=>onClick(song.song_id,"song")}>{song.title}</div>)}
            {topOf[0] === "top_artists" && topOf[1].map((artist,i)=> <div className="artist" onClick={()=>onClick(artist.artist_id,"artist")}>{artist.artist_name}</div>)}
            {topOf[0] === "top_albums" && topOf[1].map((album,i)=> <div className="album" onClick={()=>onClick(album.album_id,"album")}>{album.album_name}</div>)}
            {topOf[0] === "top_playlist" && topOf[1].map((playlist,i)=> <div className="playlist" onClick={()=>onClick(playlist.playlist_id,"playlist")}>{playlist.playlist_name}</div>)}
        </div>
    );
}

export default TopInfo ;