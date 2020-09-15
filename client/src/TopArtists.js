import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Artist from './Artist';

function TopArtists() {

    const [artists , setArtists] = useState();

    useEffect(()=> {
        getTopArtists();
    },[]);

    async function getTopArtists() {
        const { data } = await axios.get('/top_artists');
        setArtists(data[0]);
    }
    return (
        <div className="TopCon">
            {
                artists &&
                artists.map((artist,i)=>{
                    return <Artist key={i} artist={artist}/>
                })
            }
            
        </div>
    )
}

export default TopArtists
