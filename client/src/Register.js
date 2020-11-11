import React, { useState , useEffect } from 'react';
import network from './network';
import { useHistory } from 'react-router-dom';
import AnalyticsManager from './AnalyticsManager';


function Register() {
    let history = useHistory();
    const [fullName , setFullName] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');

    useEffect(() => {
        AnalyticsManager("Register Page");
      },[]);

    const onSubmit = async () => {
        try {
            const response = await network.post('/register', {
                fullName,
                username,
                password
            });
            history.push('/login');
        } catch (e) {
            setError('Username is already taken');
        }
    };
    return (
        <div className="Register">
            <div className="RegisterCon">
                <div style={{fontSize: 'x-large',fontWeight: 'bold'}}>Register</div>
                <input value={fullName} placeholder="Insert Full Name" onChange={({ target: { value } }) => setFullName(value)} />
                <input value={username} placeholder="Insert Username" onChange={({ target: { value } }) => setUsername(value)} />
                <input type="password" value={password} placeholder="Insert Password" onChange={({ target: { value } }) => setPassword(value)} />
                <button onClick={onSubmit}
                    style={{
                        width: '100px',
                        height: '30px',
                        border: '2px solid white',
                        borderRadius: '10px',
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: 'bold'}}>Submit</button>
                {error ? <div>{error}</div> : null}
            </div>
      </div>
    )
}

export default Register;
