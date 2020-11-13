import React, { useEffect, useRef, useState } from 'react';
import network from './network';
import './SearchPage.css';
import SearchingSongs from './searchComponents/SearchingSongs';
import SearchingArtists from './searchComponents/SearchingArtists';
import SearchingAlbums from './searchComponents/SearchingAlbums';
import SearchingPlaylists from './searchComponents/SearchingPlaylists';

function SearchPage() {

    const [inputValue, setInputValue] = useState('');
    const [chosenType,setChosenType] = useState('show');
    const [show,setShow] = useState(true);
    const [song,setSong] = useState(false);
    const [artist,setArtist] = useState(false);
    const [album,setAlbum] = useState(false);
    const [playlist,setPlaylist] = useState(false);
    const [returnData,setReturnData] = useState();
    
    const searchInputElement = useRef(null);

    const getSearching = async () => {
        let fixedType = chosenType === 'show' ? '/search' : `/search/${chosenType}`
        const { data } = await network.get(`${fixedType}?filter=${inputValue}`);
        setReturnData(data);
    }
    useEffect(()=>{
        console.log("Effect",chosenType);
        console.log("Effect",inputValue);
        getSearching();
    },[inputValue,chosenType])

    const handleChange = () => {
        console.log(searchInputElement.current.value);
        setInputValue(searchInputElement.current.value)
    }
    const handleClick = (type) => {
        console.log(type);
        setShow(type === 'show' ? true : false);
        setSong(type === 'songs' ? true : false);
        setArtist(type === 'artists' ? true : false);
        setAlbum(type === 'albums' ? true : false);
        setPlaylist(type === 'playlists' ? true : false);
        setChosenType(type);
    }
    return (
        <div id="searchPage">
            <input ref={searchInputElement} onChange={handleChange} placeholder='Search'></input>
            <div id="buttonsCon">
                <button className={show ? 'clickedButton' : 'unclickedButton'} onClick={()=>handleClick('show')}>SHOW ALL</button>
                <button className={song ? 'clickedButton' : 'unclickedButton'} onClick={()=>handleClick('songs')}>SONGS</button>
                <button className={artist ? 'clickedButton' : 'unclickedButton'} onClick={()=>handleClick('artists')}>ARTISTS</button>
                <button className={album ? 'clickedButton' : 'unclickedButton'} onClick={()=>handleClick('albums')}>ALBUMS</button>
                <button className={playlist ? 'clickedButton' : 'unclickedButton'} onClick={()=>handleClick('playlists')}>PLAYLISTS</button>
            </div>
            <div id="dataCon">
            {
                returnData && returnData.Songs &&
                <SearchingSongs songs={returnData.Songs} />
            }
            {
                returnData && returnData.Artists &&
                <SearchingArtists artists={returnData.Artists} />
            }
            {
                returnData && returnData.Albums &&
                <SearchingAlbums albums={returnData.Albums} />
            }
            {   
                returnData && returnData.Playlists &&
                <SearchingPlaylists playlists={returnData.Playlists} />
            }
            </div>

        </div>
    )
}

export default SearchPage
