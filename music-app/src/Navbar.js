import React from 'react';
 
function Navbar ({onClick}) {
    return (
        <div className="Navbar">
            <button className="NavButton"onClick={()=>onClick("top_songs")}> SONGS </button>
            <button className="NavButton" onClick={()=>onClick("top_artists")}> ARTISTS </button>
            <span style={{fontSize: "larger"}}><strong>TOP 20</strong></span>
            <button className="NavButton" onClick={()=>onClick("top_albums")}> ALBUMS </button>
            <button className="NavButton" onClick={()=>onClick("top_playlist")}> PLAYLISTS </button>
        </div>
    );
}

export default Navbar ;