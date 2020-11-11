import React , { useEffect, useState } from 'react';
import network from './network';
import Playlist from './Playlist';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopPlaylists() {

    const [playlists , setPlaylists] = useState();

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        dotsClass: 'slick-dots'
      };

    useEffect(()=> {
        getTopPlaylists();
    },[]);

    async function getTopPlaylists() {
        const { data } = await network.get('/playlist/topPlaylists');
        // console.log(data);
        setPlaylists(data);
    }
    return (
        <div className="MainTopCon">
            <h1>Top Playlists</h1>
            {/* <div className="TopCon"> */}
            <Slider {...settings} style={{height: '90%'}}>
            {
                playlists &&
                playlists.map((playlist,i)=>{
                    return <Playlist key={i} playlist={playlist}/>
                })
            }
            </Slider>
            {/* </div> */}
        </div>
    )
}

export default TopPlaylists
