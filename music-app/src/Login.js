import React, { useState } from 'react';
import SignIn from './SignIn';
import Register from './Register';

function Login() {
    const [hideSignIn , setHideSignIn] = useState(false);
    const hideRegister = !hideSignIn;
    return (
        <div className="Login">
            <div onClick={()=>setHideSignIn(false)}>Sign In</div>
            <div onClick={()=>setHideSignIn(true)}>Register</div>
            <SignIn hidden={hideSignIn}/>
            <Register hidden={hideRegister} changeToSignIn={()=>setHideSignIn(false)}/>
        </div>
    )
}

export default Login
