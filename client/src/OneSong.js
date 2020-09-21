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
        setSongData(data[0]);
    }

    async function getOneOther() {
        const otherUrl = Object.fromEntries(new URLSearchParams(props.location.search));
        const type = Object.keys(otherUrl).toString();
        const id = Object.values(otherUrl).toString();

        const { data } = await axios.get(`${props.match.url}?${type}=${id}`);
        // console.log(data);
        setOtherData(data[0]);
        setTypeOf(type);
        setIdOf(id);
    }


    return (
        <div className="OneOfSong">
            {
                songData && 
                <div className="Card">
                    <iframe width="100%" height="100%" 
                        src={songData[0].youtube_link} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <span style={{fontSize: 'large'}}>{songData[0].title}</span>
                    <span style={{fontSize: 'large', float: 'right'}}>{songData[0].artist_name}</span>
                </div>
            }
            {
                otherData &&
                <div className="CardFamily">
                    <h1>
                    { typeOf === 'album' && otherData[0].album_name }
                    { typeOf === 'artist' && otherData[0].artist_name }
                    { typeOf === 'playlist' && otherData[0].playlist_name }
                    </h1>
                    <div className="songsCard">
                    {
                        otherData &&
                        otherData.map((row,i)=>{
                            return (
                                <div className="songsRow" key={i}
                                    onClick={() => {history.push(`/song/${row.song_id}?${typeOf}=${idOf}`)}}>
                                    <ion-icon name="play-outline"></ion-icon>
                                    <span style={{marginLeft: '40px'}}>{row.title}</span>
                                    <span style={{float: 'right'}}>{row.length}</span>
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
