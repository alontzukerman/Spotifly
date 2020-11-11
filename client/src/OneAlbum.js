import React , { useEffect, useState } from 'react';
import network from './network';
import { useHistory } from 'react-router-dom';
import AnalyticsManager from './AnalyticsManager';


function OneAlbum({match}) {
    // console.log(match);
    let history = useHistory();

    const [albumData , setAlbumData] = useState();

    useEffect(()=> {
        getOneAlbum();
    },[]);

    async function getOneAlbum() {
        const { data } = await network.get(match.url);
        // console.log(data);
        setAlbumData(data);
        AnalyticsManager("One Album" , {"Album Name": data.albumName});

    }
    return (
        <div className="OneOf">
            {
                albumData && albumData.length !== 0 && 
                <div className="Card">
                    <img src={albumData.coverImg} alt="" style={{width: '100%'}}></img>
                    <h1>{albumData.albumName}</h1>
                    <div>{albumData.Artist.artistName}</div>
                </div>
            }
            <div className="songsCard">
            {
                albumData &&
                albumData.Songs.map((row,i)=>{
                    return (
                        <div className="songsRow" key={i}
                            onClick={() => {history.push(`/song/${row.id}?album=${row.albumId}`)}}>
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

export default OneAlbum
