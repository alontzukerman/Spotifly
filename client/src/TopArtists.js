import React , { useEffect, useState } from 'react';
import network from './network';
import Artist from './Artist';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopArtists() {

    const [artists , setArtists] = useState();

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        dotsClass: 'slick-dots'
      };
      
    useEffect(()=> {
        getTopArtists();
    },[]);

    async function getTopArtists() {
        const { data } = await network.get('/artist/topArtists');
        // console.log(data);
        setArtists(data);
    }
    return (
        <div className="MainTopCon">
            <h1>Top Artists</h1>
            {/* <div className="TopCon"> */}
            <Slider {...settings} style={{height: '90%'}}>
            {
                artists &&
                artists.map((artist,i)=>{
                    return <Artist key={i} artist={artist}/>
                })
            }
            </Slider>
            {/* </div> */}
        </div>
    )
}

export default TopArtists
