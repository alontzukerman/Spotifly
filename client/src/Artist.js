import React from 'react';
import { useHistory } from 'react-router-dom';

function Artist({artist}) {
    // console.log(artist);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/artist/${artist.artist_id}`)}}>
            {
                artist.artist_name
            }        
        </div>
    )
}

export default Artist
