import React , { useEffect, useState } from 'react';
import axios from 'axios';

function OneArtist({match}) {
    console.log(match);

    const [artistData , setArtistData] = useState();

    // todo: missing albums
    
    useEffect(()=> {
        getOneArtist();
    },[]);

    async function getOneArtist() {
        const { data } = await axios.get(match.url);
        console.log(data);
        setArtistData(data[0]);
    }

    return (
        <div className="OneOf">
            {
                artistData && 
                <div className="Card">
                    <img src={artistData[0].cover_img} style={{width: '100%'}}></img>
                    <h1>{artistData[0].artist_name}</h1>
                </div>
            }
            <div className="songsCard">
            {
                artistData &&
                artistData.map((row,i)=>{
                    return (
                        <div className="songsRow" key={i}>
                            <ion-icon name="play-outline"></ion-icon>
                            <span style={{marginLeft: '40px'}}>{row.title}</span>
                            <span style={{float: 'right'}}>{row.length}</span>
                        </div>
                        );
                    })
                }            
            </div>
        </div>
    )
}

export default OneArtist
