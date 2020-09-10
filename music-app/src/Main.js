import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import TopInfo from './TopInfo';
import Info from './Info';
import axios from 'axios';
 
function Main () {
    const [topOf , setTopOf] = useState();
    const [infoOf , setInfoOf] = useState();
    async function getTopOf (value) {
        console.log(value);
        const { data } = await axios.get(`/${value}`);
        console.log(data);
        setTopOf([value,data]);
    }
    async function SearchByID (inputValue,SearchBy) {
        console.log(inputValue);
        console.log(SearchBy);
        const { data } = await axios.get(`/${SearchBy}/${inputValue}`);
        console.log(data);
        setInfoOf(data);
    }
    return (
        <div className="Main">
            <Navbar onClick={(value)=>getTopOf(value)}/>
            <Search 
                onClick={(inputValue,SearchBy)=>SearchByID(inputValue,SearchBy)}/>
            {topOf && <TopInfo topOf={topOf}/>}
            {infoOf && <Info infoOf={infoOf}/>}
        </div>
    );
}

export default Main ;