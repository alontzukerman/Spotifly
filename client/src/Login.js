import React, { useState , useEffect } from 'react';
import network from './network';
import { useHistory } from 'react-router-dom';
import AnalyticsManager from './AnalyticsManager';


function Login() {
    let history = useHistory();
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');

    useEffect(() => {
        AnalyticsManager("Login Page");
      },[]);

    const onSubmit = async () => {
        try {
            const response = await network.post('/login', {
                username,
                password
            });
            if(response.data && response.data.success && response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('fullName', response.data.fullName);
                history.push('/');
                window.location.reload(true);
            } else { 
                console.log(response);
                setError(response.response.data.errorMessage);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="Login">
            <div className="LoginCon">
                <div style={{fontSize: 'x-large',fontWeight: 'bold'}}>Login</div>
                <input value={username} placeholder="Your Username" onChange={({ target: { value } }) => setUsername(value)} />
                <input type="password" value={password} placeholder="Your Password" onChange={({ target: { value } }) => setPassword(value)} />
                <button onClick={onSubmit}
                    style={{
                        width: '100px',
                        height: '30px',
                        border: '2px solid white',
                        borderRadius: '10px',
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: 'bold'}}>Submit</button>
                {error ? <div>*{error}</div> : null}
            </div>
      </div>
    )
}

export default Login;
