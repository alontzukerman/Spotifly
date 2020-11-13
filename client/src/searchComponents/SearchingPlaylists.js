import React from 'react';
import { useHistory } from 'react-router-dom';


function SearchingPlaylists({playlists}) {
    let history = useHistory();

    console.log('playlists',playlists);
    return (
        <>
        <div className="searchingTitle">PLAYLISTS</div>
        <div className="searchingCon">
        {
            playlists.map((playlist)=>{
                return (
                    <div className="searchingItem"
                        onClick={() => {history.push(`/playlist/${playlist._source.id}`)}}>
                    {playlist._source.playlistName}
                    </div>
                );
            })
        }
        </div>
        </>
    )
}

export default SearchingPlaylists
