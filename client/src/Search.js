import React, { useEffect, useState } from 'react';
import AnalyticsManager from './AnalyticsManager';
import network from './network';
import StyledSearchItem from './styled/StyledSearchItem';

function Search({className}) {

    const [search , setSearch] = useState('');
    const [searchArray , setSearchArray] = useState();

    useEffect(() => {
        if(search.length !== 0)
            getSearchArray();
    }, [search]);

    async function getSearchArray() {
        let {data} = await network.get(`/search?name=${search}`);
        console.log(data);
        setSearchArray(data);
    };

    return (
        <div className={className}>
            <input value={search} placeholder="Search" onFocus={(e)=>AnalyticsManager("Search Focus")} onChange={({ target: { value } }) => setSearch(value)}
                style={{
                    width: '80%',
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderBottom: '4px solid rgba(0,0,0,0.6)',
            }}></input>
            {
                searchArray && searchArray.length !== 0 &&
                searchArray.map((item,i)=>{
                    // console.log(item);
                    return <StyledSearchItem>{item.itemName}</StyledSearchItem>
                })
            }
        </div>
    )
}

export default Search
