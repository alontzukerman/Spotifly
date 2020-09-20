import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './Song';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSongs() {

    const [songs , setSongs] = useState();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    useEffect(()=> {
        getTopSongs();
    },[]);

    async function getTopSongs() {
        const { data } = await axios.get('/top_songs');
        setSongs(data[0]);
    }
    return (
        <div className="MainTopCon">
            <h1>Top Songs</h1>
            <div className="TopCon">
                {
                    songs &&
                    songs.map((song,i)=>{
                        return <Song key={i} song={song}/> ;
                    })
                }
            </div>
        </div>
    )
}

export default TopSongs
