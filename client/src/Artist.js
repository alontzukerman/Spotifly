import React from 'react';
import { useHistory } from 'react-router-dom';

function Artist({artist}) {
    // console.log(artist);
    let history = useHistory();
    return (
        <div 
            className="ItemCon"
            onClick={() => {history.push(`/artist/${artist.id}`)}}>
            <img src={artist.coverImg} alt="" style={{height: '200px', opacity: '0.6'}}></img>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'x-large',
                fontWeight: 'bolder'                
            }}>{artist.artistName}</div>
        </div>
    )
}

export default Artist
