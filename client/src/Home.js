import React , { useEffect } from 'react'
import TopSongs from './TopSongs';
import TopArtists from './TopArtists';
import TopAlbums from './TopAlbums';
import TopPlaylists from './TopPlaylists';
import AnalyticsManager from './AnalyticsManager';


function Home() {
    useEffect(() => {
        AnalyticsManager("Home Page");
      },[]);
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
