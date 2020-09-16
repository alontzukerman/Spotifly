import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Album from './Album';

function TopAlbums() {

    const [albums , setAlbums] = useState();

    useEffect(()=> {
        getTopAlbums();
    },[]);

    async function getTopAlbums() {
        const { data } = await axios.get('/top_albums');
        setAlbums(data[0]);
    }

    return (
        <div className="MainTopCon">
            <h1>Top Albums</h1>
            <div className="TopCon">
            {
                albums &&
                albums.map((album,i)=>{
                    return <Album key={i} album={album}/>
                })
            }
            </div>
        </div>
    )
}

export default TopAlbums
