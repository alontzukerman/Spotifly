import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function OnePlaylist({match}) {
    console.log(match);
    let history = useHistory();

    const [playlistData , setPlaylistData] = useState();

    useEffect(()=> {
        getOnePlaylist();
    },[]);

    async function getOnePlaylist() {
        const { data } = await axios.get(match.url);
        console.log(data);
        setPlaylistData(data[0]);
    }
    return (
        <div className="OneOf">
            {
                playlistData && 
                <div className="Card">
                    <img src={playlistData[0].cover_img} style={{width: '100%'}}></img>
                    <h1>{playlistData[0].playlist_name}</h1>
                    <div>{playlistData[0].created_at}</div>
                </div>
            }
            <div className="songsCard">
            {
                playlistData &&
                playlistData.map((row,i)=>{
                    return (
                        <div className="songsRow" key={i}
                            onClick={() => {history.push(`/song/${row.song_id}?playlist=${row.playlist_id}`)}}>
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

export default OnePlaylist
