import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function OneArtist({match}) {
    console.log(match);
    let history = useHistory();

    const [artistData , setArtistData] = useState();
    
    useEffect(()=> {
        getOneArtist();
    },[]);

    async function getOneArtist() {
        const { data } = await axios.get(match.url);
        console.log(data);
        setArtistData(data);
    }


    return (
        <div className="OneOf">
            {
                artistData && artistData.length !== 0 && 
                <div className="Card">
                    <img src={artistData.coverImg} alt="" style={{width: '100%'}}></img>
                    <h1>{artistData.artistName}</h1>
                </div>
            }
            <div className="albumsCard">
                {
                    artistData &&
                    artistData.Albums.map((row,i)=>{
                        return (
                            <div className="albumsCol" key={i}
                                onClick={() => {history.push(`/album/${row.id}`)}}>
                                <img src={row.coverImg} alt="" style={{width: '100%', opacity: '0.3', borderRadius: '10%'}}></img>
                                <span style={{
                                   position: 'absolute',
                                   top: '50%',
                                   left: '50%',
                                   transform: 'translate(-50%, -50%)'
                                }}>{row.albumName}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="songsCard">
            {
                artistData &&
                artistData.Songs.map((row,i)=>{
                    return (
                        <div className="songsRow" key={i}
                            onClick={() => {history.push(`/song/${row.id}?artist=${row.artistId}`)}}>
                            <ion-icon name="play-outline"></ion-icon>
                            <span style={{marginLeft: '40px'}}>{row.songTitle}</span>
                            <span style={{float: 'right'}}>{row.songLength}</span>
                        </div>
                        );
                    })
            }            
            </div>
        </div>
    )
}

export default OneArtist
