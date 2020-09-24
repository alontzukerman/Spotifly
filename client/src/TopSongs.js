import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './Song';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSongs() {

    const [songs , setSongs] = useState();

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,
        dotsClass: 'slick-dots'
      };

    useEffect(()=> {
        getTopSongs();
    },[]);

    async function getTopSongs() {
        const { data } = await axios.get('/song/topSongs');
        // console.log(data);
        setSongs(data);
    }
    return (
        <div className="MainTopCon">
            <h1>Top Songs</h1>
            {/* <div className="TopCon"> */}
            <Slider {...settings}>
            {
                songs &&
                songs.map((song,i)=>{
                    return <Song key={i} song={song}/> ;
                })
            }
            </Slider>
        </div>
    )
}

export default TopSongs
