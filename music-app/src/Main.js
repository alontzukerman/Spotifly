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
    async function searchByID (inputValue,searchBy) {
        console.log(inputValue);
        console.log(searchBy);
        const { data } = await axios.get(`/${searchBy}/${inputValue}`);
        console.log(data);
        setInfoOf([searchBy,data]);
    }
    return (
        <div className="Main">
            <Navbar onClick={(value)=>getTopOf(value)}/>
            <Search 
                onClick={(inputValue,searchBy)=>searchByID(inputValue,searchBy)}/>
            <div className="InfoCon">
                {topOf && <TopInfo topOf={topOf} onClick={(id,searchBy)=>searchByID(id,searchBy)}/>}
                {infoOf && <Info infoOf={infoOf} onClick={(id,searchBy)=>searchByID(id,searchBy)}/>}
            </div>
        </div>
    );
}

export default Main ;