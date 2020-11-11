import React , { useEffect, useState } from 'react';
import network from './network';
import Album from './Album';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function TopAlbums() {

    const [albums , setAlbums] = useState();

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 450,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,
        dotsClass: 'slick-dots'
      };

    useEffect(()=> {
        getTopAlbums();
    },[]);

    async function getTopAlbums() {
        const { data } = await network.get('/album/topAlbums');
        // console.log(data);
        setAlbums(data);
    }

    return (
        <div className="MainTopCon">
            <h1>Top Albums</h1>
            {/* <div className="TopCon"> */}
            <Slider {...settings} style={{height: '90%'}}>
            {
                albums &&
                albums.map((album,i)=>{
                    return <Album key={i} album={album}/>
                })
            }
            </Slider>
            {/* </div> */}
        </div>
    )
}

export default TopAlbums
