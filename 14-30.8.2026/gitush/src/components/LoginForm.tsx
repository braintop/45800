import { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        setUsername(e.target.value);
    }

    // function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     console.log(e.target.value);
    //     setPassword(e.target.value);
    // }
    function handleLogin() {
        console.log(username, password);
    }

    return (
        <div>
            <input type="text" placeholder="Username"  onChange={handleUsernameChange} />
            {/* <input type="password" placeholder="Password"  onChange={handlePasswordChange} /> */}
            <input type="text" placeholder="Email"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}