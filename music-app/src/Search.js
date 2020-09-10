import React, { useState } from 'react';
 
function Search ({onClick}) {
    const [inputValue , setInputValue] = useState('');
    const [searchBy , setSearchBy] = useState('song');
    return (
        <div className="Search"> 
            SEARCH
            <select id="searchBy" onChange={e=>setSearchBy(e.target.value)}>
                <option value="song">SONG</option>
                <option value="artist">ARTIST</option>
                <option value="album">ALBUM</option>
                <option value="playlist">PLAYLIST</option>
            </select>
            BY ID
            <input onChange={e=>setInputValue(e.target.value)}></input>
            <button onClick={()=>onClick(inputValue,searchBy)}>SEARCH</button>
        </div>
    );
}

export default Search ;