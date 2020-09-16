import React from 'react';
import { useHistory } from 'react-router-dom';

function Song({song}) {
    // console.log(song);
    let history = useHistory();
    return (
            <div 
                className="ItemCon"
                onClick={() => {history.push(`/song/${song.song_id}`)}}>
                {
                    song.title
                }
            </div>
    )
}

export default Song
