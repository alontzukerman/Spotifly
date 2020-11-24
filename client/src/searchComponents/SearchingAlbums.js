import React from 'react';
import { useHistory } from 'react-router-dom';


function SearchingAlbums({albums}) {
    let history = useHistory();

    console.log('albums',albums);
    return (
        <>
        <div className="searchingTitle">ALBUMS</div>
        <div className="searchingCon">
        {
            albums.map((album)=>{
                return (
                    <div className="searchingItem"
                        onClick={() => {history.push(`/album/${album._source.id}`)}}>
                    {album._source.albumName}
                    </div>
                );
            })
        }
        </div>
        </>
    )
}

export default SearchingAlbums
