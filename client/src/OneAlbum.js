import React , { useEffect, useState } from 'react';
import axios from 'axios';

function OneAlbum({match}) {
    console.log(match);

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
                albumData && 
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

export default OneAlbum
