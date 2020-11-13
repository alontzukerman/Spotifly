import React from 'react';
import { useHistory } from 'react-router-dom';


function SearchingSongs({songs}) {
    let history = useHistory();

    console.log('SONGS',songs)
    return (
        <>
        <div className="searchingTitle">SONGS</div>
        <div className="searchingCon">
        {
            songs.map((song)=>{
                return (
                    <div className="searchingItem"
                        onClick={() => {history.push(`/song/${song._source.id}`)}}>
                    {song._source.songTitle}
                    </div>
                );
            })
        }
        </div>
        </>
    )
}

export default SearchingSongs
