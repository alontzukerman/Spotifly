import React from 'react';
 
function Navbar ({onClick}) {
    return (
        <div className="Navbar">
            <button onClick={()=>onClick("top_songs")}> SONGS </button>
            <button onClick={()=>onClick("top_artists")}> ARTISTS </button>
            GET THE TOP 20 OF
            <button onClick={()=>onClick("top_albums")}> ALBUMS </button>
            <button onClick={()=>onClick("top_playlist")}> PLAYLISTS </button>
        </div>
    );
}

export default Navbar ;