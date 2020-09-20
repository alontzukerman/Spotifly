import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function OneArtist({match}) {
    console.log(match);
    let history = useHistory();

    const [artistData , setArtistData] = useState();
    const [artistAlbums , setArtistAlbums] = useState();
    
    useEffect(()=> {
        getOneArtist();
        getAlbumsOfArtist();
    },[]);

    async function getOneArtist() {
        const { data } = await axios.get(match.url);
        console.log(data);
        setArtistData(data[0]);
    }
    async function getAlbumsOfArtist() {
        const { data } = await axios.get(`${match.url}/album`);
        console.log(data);
        setArtistAlbums(data[0]);
    }

    return (
        <div className="OneOf">
            {
                artistData && artistData.length !== 0 && 
                <div className="Card">
                    <img src={artistData[0].cover_img} style={{width: '100%'}}></img>
                    <h1>{artistData[0].artist_name}</h1>
                </div>
            }
            <div className="albumsCard">
                {
                    artistAlbums &&
                    artistAlbums.map((row,i)=>{
                        return (
                            <div className="albumsCol" key={i}
                                onClick={() => {history.push(`/album/${row.album_id}`)}}>
                                <img src={row.cover_img} style={{width: '100%', opacity: '0.3', borderRadius: '10%'}}></img>
                                <span style={{
                                   position: 'absolute',
                                   top: '50%',
                                   left: '50%',
                                   transform: 'translate(-50%, -50%)'
                                }}>{row.album_name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="songsCard">
            {
                artistData &&
                artistData.map((row,i)=>{
                    return (
                        <div className="songsRow" key={i}
                            onClick={() => {history.push(`/song/${row.song_id}?artist=${row.artist_id}`)}}>
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
