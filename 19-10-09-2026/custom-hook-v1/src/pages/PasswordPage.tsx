import {useState} from 'react'
import { usePasswordValidator } from '../hooks/usePasswordValidator'
export const PasswordPage = () => {
    const [password, setPassword] = useState('');
    const {isValid, errors} = usePasswordValidator(password);

    return (
        <div>
            <h1>Password Page</h1>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {isValid ? <p>Password is valid</p> : <p>Password is invalid</p>}
            <ul>
                {errors.map((error:any, index:any) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
}