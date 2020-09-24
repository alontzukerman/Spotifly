import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function OneSong(props) {
    console.log(props);
    let history = useHistory();

    const [songData , setSongData] = useState();
    const [otherData , setOtherData] = useState();
    const [typeOf , setTypeOf] = useState();
    const [idOf , setIdOf] = useState();

    useEffect(()=> {
        getOneSong();
        props.location.search.length !== 0 && getOneOther();
    },[]);

    useEffect(()=> {
        getOneSong();
    },[props.match.url]);

    async function getOneSong() {
        const { data } = await axios.get(props.match.url);
        console.log(data);
        setSongData(data);
    }

    async function getOneOther() {
        const otherUrl = Object.fromEntries(new URLSearchParams(props.location.search));
        const type = Object.keys(otherUrl).toString();
        const id = Object.values(otherUrl).toString();
        console.log(`${props.match.url}${props.location.search}`);

        const { data } = await axios.get(`${props.match.url}${props.location.search}`);
        console.log(data);
        setOtherData(data);
        setTypeOf(type);
        setIdOf(id);
    }


    return (
        <div className="OneOfSong">
            {
                songData && 
                <div className="Card">
                    <iframe width="100%" height="100%" 
                        src={songData.youtubeLink} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <span style={{fontSize: 'large'}}>{songData.songTitle}</span>
                    <span style={{fontSize: 'large', float: 'right'}}>{songData.Artist.artistName}</span>
                </div>
            }
            {
                otherData &&
                <div className="CardFamily">
                    <h1>
                    { typeOf === 'album' && otherData.albumName }
                    { typeOf === 'artist' && otherData.artistName }
                    { typeOf === 'playlist' && otherData.playlistName }
                    </h1>
                    <div className="songsCard">
                    {
                        otherData &&
                        otherData.Songs.map((row,i)=>{
                            return (
                                <div className="songsRow" key={i}
                                    onClick={() => {history.push(`/song/${row.id}?${typeOf}=${idOf}`)}}>
                                    <ion-icon name="play-outline"></ion-icon>
                                    <span style={{marginLeft: '40px'}}>{row.songTitle}</span>
                                    <span style={{float: 'right'}}>{row.songLength}</span>
                                </div>
                            );
                        })
                    }            
                    </div>
                </div>
            }
        </div>
    )
}

export default OneSong
