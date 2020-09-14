import React, { useState } from 'react';
import axios from 'axios';

function SignIn({hidden}) {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    async function signInUser() {
        const { data } = await axios.get(`/user/${email}/${password}`);
        console.log(data);
        data.length === 1 && alert("you signed in");
        data.length === 0 && alert("wrong email or password");
    }
    return (
        <div className={hidden ? "hiddenElement" : "SignIn"}>
            <input onChange={e=>setEmail(e.target.value)} placeholder="email"></input>
            <input onChange={e=>setPassword(e.target.value)} placeholder="password"></input>  
            <button onClick={()=>signInUser()}>Login</button>          
        </div>
    )
}

export default SignIn
