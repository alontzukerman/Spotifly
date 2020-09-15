import React from 'react'
import TopSongs from './TopSongs';
import TopArtists from './TopArtists';
import TopAlbums from './TopAlbums';
import TopPlaylists from './TopPlaylists';

function Home() {
    return (
        <div className="Home">
            <TopSongs />
            <TopArtists />
            <TopAlbums />
            <TopPlaylists />
        </div>
    )
}

export default Home
