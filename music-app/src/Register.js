import React, { useState } from 'react';
import axios from 'axios';

function Register({hidden,changeToSignIn}) {
    const [userName , setUserName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    async function createNewUser () {
        let user = {
            user_name: userName,
            email: email,
            password: password,
        }
        const { response } = await axios.post(`/user`,user);
        changeToSignIn();
    }
    return (
        <div className={hidden ? "hiddenElement" : "Register"}>
           <input onChange={e=>setUserName(e.target.value)} placeholder="full name"></input>           
           <input onChange={e=>setEmail(e.target.value)} placeholder="email"></input>
           <input onChange={e=>setPassword(e.target.value)} placeholder="password"></input>
           <button onClick={()=>createNewUser()}>Register</button>           
        </div>
    )
}

export default Register
