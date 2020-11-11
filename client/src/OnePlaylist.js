import React , { useEffect, useState } from 'react';
import network from './network';
import { useHistory } from 'react-router-dom';
import AnalyticsManager from './AnalyticsManager';



function OnePlaylist({match}) {
    // console.log(match);
    let history = useHistory();

    const [playlistData , setPlaylistData] = useState();

    useEffect(()=> {
        getOnePlaylist();
    },[]);

    async function getOnePlaylist() {
        const { data } = await network.get(match.url);
        // console.log(data);
        setPlaylistData(data);
        AnalyticsManager("One Playlist" , {"Playlist Name": data.playlistName});

    }
    return (
        <div className="OneOf">
            {
                playlistData && 
                <div className="Card">
                    <img src={playlistData[0].Playlist.coverImg} alt="" style={{width: '100%'}}></img>
                    <h1>{playlistData[0].Playlist.playlistName}</h1>
                    <div>{playlistData[0].Playlist.createdAt}</div>
                </div>
            }
            <div className="songsCard">
            {
                playlistData &&
                playlistData.map((row,i)=>{
                    return (
                        <div className="songsRow" key={i}
                            onClick={() => {history.push(`/song/${row.Song.id}?playlist=${row.Playlist.id}`)}}>
                            <ion-icon name="play-outline"></ion-icon>
                            <span style={{marginLeft: '40px'}}>{row.Song.songTitle}</span>
                            <span style={{float: 'right'}}>{row.Song.songLength}</span>
                        </div>
                        );
                    })
                }            
            </div>
        </div>
    )
}

export default OnePlaylist
