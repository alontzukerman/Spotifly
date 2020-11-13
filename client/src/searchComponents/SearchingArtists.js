import React from 'react';
import { useHistory } from 'react-router-dom';


function SearchingArtists({artists}) {
    let history = useHistory();

    console.log('artists',artists);
    return (
        <>
        <div className="searchingTitle">ARTISTS</div>
        <div className="searchingCon">
        {
            artists.map((artist)=>{
                return (
                    <div className="searchingItem"
                        onClick={() => {history.push(`/artist/${artist._source.id}`)}}>
                    {artist._source.artistName}
                    </div>
                );
            })
        }
        </div>
        </>
    )
}

export default SearchingArtists
