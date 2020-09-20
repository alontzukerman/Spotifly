import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function OneAlbum({match}) {
    console.log(match);
    let history = useHistory();

    const [albumData , setAlbumData] = useState();

    useEffect(()=> {
        getOneAlbum();
    },[]);

    async function getOneAlbum() {
        const { data } = await axios.get(match.url);
        console.log(data);
        setAlbumData(data[0]);
    }
    return (
        <div className="OneOf">
            {
                albumData && albumData.length !== 0 && 
                <div className="Card">
                    <img src={albumData[0].cover_img} style={{width: '100%'}}></img>
                    <h1>{albumData[0].album_name}</h1>
                    <div>{albumData[0].artist_name}</div>
                </div>
            }
            <div className="songsCard">
            {
                albumData &&
                albumData.map((row,i)=>{
                    return (
                        <div className="songsRow" key={i}
                            onClick={() => {history.push(`/song/${row.song_id}?album=${row.album_id}`)}}>
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

export default OneAlbum
