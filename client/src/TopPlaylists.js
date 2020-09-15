import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Playlist from './Playlist';

function TopPlaylists() {

    const [playlists , setPlaylists] = useState();

    useEffect(()=> {
        getTopPlaylists();
    },[]);

    async function getTopPlaylists() {
        const { data } = await axios.get('/top_playlist');
        setPlaylists(data[0]);
    }
    return (
        <div className="TopCon">
            {
                playlists &&
                playlists.map((playlist,i)=>{
                    return <Playlist key={i} playlist={playlist}/>
                })
            }            
        </div>
    )
}

export default TopPlaylists
